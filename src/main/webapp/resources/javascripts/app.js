var projects = [
  {id: 1, name: "Xi'an Telecom", status: "Pending"},
  {id: 2, name: "Beijing Unicom", status: "Processing"}
];

var ProjectView = React.createClass({
    render: function() {
        return (
            <div>
                <div>
                    {this.props.project.name}
                </div>
                <div>
                    {this.props.project.status}
                </div>
            </div>
        )
    }
});

var ProjectListView = React.createClass({
    render: function() {
        var renderProjects = this.props.projects.map(function(project) {
            return (
                <ProjectView project={project} key={project.id} />
            )
        });
        return (
            <div>
                {renderProjects}
            </div>
        )
    }
});

var ProjectFormView = React.createClass({
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
        this.props.onNewProjectSubmit({name: name, status: status});
    },
    render: function() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" placeholder="project name" value={this.state.name} onChange={this.handleNameChanged} />
                <input type="text" placeholder="project status" value={this.state.status} onChange={this.handleStatusChanged} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
});

var ProjectPageView = React.createClass({
    getInitialState: function() {
        return {projects: []};
    },
    componentDidMount: function() {
        var self = this;
        setTimeout(function() {
            self.setState({projects: projects});
        }, 5000);
    },
    handleNewProjectSubmit: function(project) {
        projects.push(project);
        var self = this;
        setTimeout(function() {
            self.setState({projects: projects});
        }, 5000);
    },
    render: function() {
        return (
            <div>
                <h1>Projects</h1>
                <ProjectListView projects={this.state.projects}/>
                <ProjectFormView onNewProjectSubmit={this.handleNewProjectSubmit} />
            </div>
        )
    }
});

ReactDOM.render(
    <ProjectPageView projects={projects} />,
    document.getElementById('app')
);
