var Todo = Backbone.Model.extend({
    defaults: function () {
        return {
            title: 'todo',
            description: 'this is a todo item',
            order: Todos.nextOrder(),
            //order: 1,
            priority: 0,
            done: false
        };
    },
    validate: function (attrs, options) {
        if (attrs.title.length == 0) {
            return 'name can not be empty';
        }
    },
    initialize: function () {
        if (!this.get("title")) {
            this.set({"title": this.defaults().title});
        }
    },
    toggle: function () {
        this.save({done: !this.get('done')});
    }
});

var TodoList = Backbone.Collection.extend({
    model: Todo,
    localStorage: new Backbone.LocalStorage('todos'),
    done: function () {
        return this.where({done: true});
    },
    nextOrder: function () {
        if (!this.length) return 1;
        return this.last().get('order') + 1;
    },
    remaining: function () {
        return this.without.apply(this, this.done());
    },
    comparator: function (todo) {
        return todo.get('order');
    }

});

var Todos = new TodoList;
Todos.add([
    {
        title: 'highest priority task',
        done: true
    },
    {
        title: 'normal priority task',
        done: false
    }
]);

var TodoView = Backbone.View.extend({
    tagName: 'li',

    template: _.template($('#item-template').html()),
    //template: '',

    events: {
        'click .toggle': 'toggleDone',
        'double click': 'edit'
    },

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.toggleClass('done', this.model.get('done'));
        this.input = this.$('.edit');
    },

    toggleDone: function () {
        this.model.toggle();
    },

    edit: function () {
        this.$el.addClass('editing');
        this.input.fucos();
    }
});

var TodoListView = Backbone.View.extend({
    el: $('ul'),
    template: '',
    render: function () {
    },
    initialize: function (collection) {

    }
});

//var todoList = new TodoList();

var AppView = Backbone.View.extend({
    el: $('#todoapp'),

    events: {
        "keypress #new-todo": "createOnEnter",
        "click #clear-completed": "clearCompleted",
        "click #toggle-all": "toggleAllComplete"
    },

    initialize: function () {
        this.input = this.$('#new-todo');
        this.allCheckbox = this.$('#toggle-all')[0];
        this.listenTo(Todos, 'add', this.addOne);
        this.listenTo(Todos, 'reset', this.addAll);
        this.listenTo(Todos, 'all', this.render);

        this.footer = this.$('#footer');
        this.main = this.$('#main');

        //Todos.fetch();
    },

    render: function () {
        var done = Todos.done().length;
        var remaining = Todos.remaining().length;

        if (Todos.length) {
            this.main.show();
            this.footer.show();
        } else {
            this.main.hide();
            this.footer.hide();
        }

        this.allCheckbox.checked = !remaining;
    },

    addOne: function (todo) {
        var view = new TodoView({model: todo});
        this.$('#todo-list').append(view.$el);
    },

    addAll: function () {
        Todos.each(this.addOne, this);
    },

    createOnEnter: function (event) {
        if (event.keyCode != 13) return;
        if (!this.input.val()) return;

        Todos.create({title: this.input.val()});
        this.input.val('');
    },

    clearCompleted: function () {
        _.invoke(Todos.done(), 'destroy');
        return false;
    },

    toggleAllCompleted: function () {
        var done = this.allCheckbox.checked;
        Todos.each(function (todo) {
            todo.save({'done': done});
        });
    }


});

$(function () {

    var app = new AppView({});
});
