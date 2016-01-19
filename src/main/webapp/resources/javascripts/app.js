var tasks = [
  {id: 1, name: "Xi'an Telecom", status: "Pending"},
  {id: 2, name: "Beijing Unicom", status: "Processing"}
];

var TaskView = React.createClass({
    render: function() {
        return (
            <div>
                <div>
                    {this.props.task.name}
                </div>
                <div>
                    {this.props.task.status}
                </div>
            </div>
        )
    }
});

var TaskListView = React.createClass({
    render: function() {
        var renderTasks = this.props.tasks.map(function(task) {
            return (
                <TaskView task={task} key={task.id} />
            )
        });
        return (
            <div>
                {renderTasks}
            </div>
        )
    }
});

var TaskFormView = React.createClass({
    getInitialState: function() {
        return {name: '', status: ''};
    },
    handleNameChanged: function(e) {
        this.setState({name: e.target.value});
    },
    handleStatusChanged: function(e) {
        this.setState({status: e.target.value});
    },
    handleFormSubmit: function(e) {
        e.preventDefault();
        var name = this.state.name;
        var status = this.state.status;
        if (!name || !status) {
            return;
        }
        this.setState({name: '', status: ''});
        this.props.onNewTaskSubmit({name: name, status: status});
    },
    render: function() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" placeholder="task name" value={this.state.name} onChange={this.handleNameChanged} />
                <input type="text" placeholder="task status" value={this.state.status} onChange={this.handleStatusChanged} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
});

var TaskPageView = React.createClass({
    getInitialState: function() {
        return {tasks: []};
    },
    componentDidMount: function() {
        var self = this;
        setTimeout(function() {
            self.setState({tasks: tasks});
        }, 2000);
    },
    handleNewTaskSubmit: function(task) {
        tasks.push(task);
        var self = this;
        setTimeout(function() {
            self.setState({tasks: tasks});
        }, 2000);
    },
    render: function() {
        return (
            <div>
                <h1>Tasks</h1>
                <TaskListView tasks={this.state.tasks}/>
                <TaskFormView onNewTaskSubmit={this.handleNewTaskSubmit} />
            </div>
        )
    }
});

ReactDOM.render(
    <TaskPageView tasks={tasks} />,
    document.getElementById('app')
);
