var App = React.createClass({
  getInitialState: function() {
    return {
      user: undefined,
      userName: undefined,
      loggedIn: false,
      screen: "loggedIn",
      openStudentClasses: [],
      openTeacherClasses: []
    };
  },

  componentWillMount: function() {
    //update backend to have sessions/info route
    $.get('/user/profile', function(resp) {
      if (resp) {
        this.setState({loggedIn: true, user: resp, userName: resp.email, fullName: resp.full_name});
      } else {
        this.setState({loggedIn: false});
      }
    }.bind(this));
    this.loadClasses();
  },

  getScreenContent: function() {
    switch (this.state.screen) {
      case "loggedIn":
        return (
        <div>
          <Header userName={this.state.fullName} onUpdate={this.updateScreen} />
          <MyEventsContainer profile={this.state.user} />
          <CalendarContainer onUpdate={this.updateScreen} calendarUpdate={this.loadClasses} openStudentClasses={this.state.openStudentClasses} openTeacherClasses={this.state.openTeacherClasses}/>
          <CreateEvent onUpdate={this.updateScreen} profileUpdate={this.loadProfile}/>
        </div>
      );
      case "editProfile":
        return (
          <div>
            <Header userName={this.state.userName} onUpdate={this.updateScreen}/>
            <EditProfile profile={this.state.user} onUpdate={this.updateScreen} />
          </div>
      );
    }
  },

  alertMe: function() {
    alert("This Works")
  },

  loadClasses: function() {
    $.get('/classrooms', function(resp){
      this.setState({openStudentClasses: resp.students, openTeacherClasses: resp.teachers});
    }.bind(this));
    this.loadProfile();
  },

  loadProfile: function() {
    $.get('/user/profile', function(resp) {
      if (resp) {
        this.setState({user: resp});
      }
    }.bind(this));
  },

  updateScreen: function(newScreen, newStates={}) {
    this.setState({
      screen: newScreen
    });
    var newStatesClone = {}
    for (newState in newStates) {
			newStatesClone[newState]= newStates[newState]
		}
		this.setState(newStatesClone)
    var screens = "editUserProfile";
  },

  render: function() {
    if (this.state.loggedIn) {
      return (
        <div id="page">
          {this.getScreenContent()}
        </div>
      );
    }
    else {
      return (<Splash/>);
    }
  }

});
