var uikit = uikit || {};
uikit.event = uikit.event || {};
uikit.event.EventTypes = {
    EVENT_NONE: 0, EVENT_INDEX_CHANGE: 1, EVENT_LIST_DATA_READY: 2, EVENT_GRID_DATA_READY: 3
};


uikit.event.JSEvent = Base.extend({
    constructor: function (obj) {
        this.type = obj.type || uikit.event.EventTypes.EVENT_NONE;
        this.object = obj.data || {};
    },
    getType: function () {
        return this.type;
    },
    getObject: function () {
        return this.object;
    }
});

uikit.event.JSEventListener = Base.extend({
    constructor: function (listener) {
        this.sense = listener.sense;
        this.handle = listener.handle || function (event) {
            };
    },
    getSense: function () {
        return this.sense;
    }
});

uikit.event.JSEventDispatcher = function () {
    if (uikit.event.JSEventDispatcher.singlton) {
        return uikit.event.JSEventDispatcher.singlton;
    }
    this.listeners = {};
    uikit.event.JSEventDispatcher.singlton = this;
    this.post = function (event) {
        var handlers = this.listeners[event.getType()];
        for (var index in handlers) {
            if (handlers[index].handle && typeof handlers[index].handle == 'function') {
                handlers[index].handle(event);
            }
        }
    };
    this.addEventListener = function (listener) {
        var item = listener.getSense();
        var listeners = this.listeners[item];
        if (listeners) {
            this.listeners[item].push(listener);
        } else {
            var hList = [];
            hList.push(listener);
            this.listeners[item] = hList;
        }
    };
};

uikit.event.JSEventDispatcher.getInstance = function () {
    return new uikit.event.JSEventDispatcher();
};

uikit.component = uikit.component || {};
uikit.component.EventSupport = Base.extend({
    constructor: function () {
    },
    raiseEvent: function (eventdef) {
        var e = new uikit.event.JSEvent(eventdef);
        uikit.event.JSEventDispatcher.getInstance().post(e);
    },
    addActionListener: function (listenerdef) {
        var l = new uikit.event.JSEventListener(listenerdef);
        uikit.event.JSEventDispatcher.getInstance().addEventListener(l);
    }
});

uikit.component.ComponentBase = uikit.component.EventSupport.extend({
    constructor: function (canvas) {
        this.canvas = canvas;
    },
    render: function (datamodel) {
    }
});

uikit.component.JSList = uikit.component.ComponentBase.extend({
    constructor: function (canvas, datamodel) {
        this.base(canvas);
        this.render(datamodel);
    },
    render: function (datamodel) {
        var jqo = $(this.canvas);
        var text = "";
        for (var p in datamodel.items) {
            text += datamodel.items[p] + ";";
        }
        var item = $("<div></div>").addClass("component");
        item.text(text);
        item.click(function () {
            jqo.find("div.selected").removeClass("selected");
            $(this).addClass("selected");
            var idx = jqo.find("div").index($(".selected")[0]);
            var c = new uikit.component.ComponentBase(null);
            c.raiseEvent({
                type: uikit.event.EventTypes.EVENT_INDEX_CHANGE,
                data: {index: idx}
            });
        });
        jqo.append(item);
    },
    update: function (event) {
        var jqo = $(this.canvas);
        jqo.empty();
        var dm = event.getObject().items;
        for (var i = 0; i < dm.length(); i++) {
            var entity = dm.get(i).item;
            jqo.append(this.createItem({items: entity}));
        }
    },
    createItem: function (datamodel) {
        var jqo = $(this.canvas);
        var text = datamodel.items;
        var item = $("<div></div>").addClass("component");
        item.text(text);
        item.click(function () {
            jqo.find("div.selected").removeClass("selected");
            $(this).addClass("selected");
            var idx = jqo.find("div").index($(".selected")[0]);
            var c = new uikit.component.ComponentBase(null);
            c.raiseEvent({
                type: uikit.event.EventTypes.EVENT_INDEX_CHANGE,
                data: {index: idx}
            });
        });
        return item;
    },
    getSelectedItemIndex: function () {
        var jqo = $(this.canvas);
        var index = jqo.find("div").index($(".selected")[0]);
        return index;
    }
});


$(document).ready(function () {
    var dataModel = {items: ["China", "Canada", "U.S.A", "U.K", "Uruguay"]};
    var ldmap = new uikit.component.ArrayLike(dataModel);
    ldmap.addActionListener({
        sense: uikit.event.EventTypes.EVENT_INDEX_CHANGE, handle: function (event) {
            var idx = event.getObject().index;
            uikit.component.EventGenerator.raiseEvent({
                type: uikit.event.EventTypes.EVENT_GRID_DATA_READY,
                data: {rows: ldmap.get(idx).grid}
            });
        }
    });
    var list = new uikit.component.JSList("div#componentList", []);
    var grid = new uikit.component.JSGrid("div#conditionsTable table tbody");
    list.addActionListener({
        sense: uikit.event.EventTypes.EVENT_LIST_DATA_READY, handle: function (event) {
            list.update(event);
        }
    });
    grid.addActionListener({
        sense: uikit.event.EventTypes.EVENT_GRID_DATA_READY, handle: function (event) {
            grid.update(event);
        }
    });
    uikit.component.EventGenerator.raiseEvent({
        type: uikit.event.EventTypes.EVENT_LIST_DATA_READY, data: {items: ldmap}
    });
    var colorPanel = new uikit.component.Panel("div#colorPanel");
    colorPanel.addActionListener({
        sense: uikit.event.EventTypes.EVENT_INDEX_CHANGE, handle: function (event) {
            var idx = parseInt(10 * Math.random())
            colorPanel.update(idx);
        }
    });
});
