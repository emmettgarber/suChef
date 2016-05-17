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
    this.loadEvents();
  },

  onCalendarUpdate: function(){
    { /* this.setState({openStudentClasses: openStudentClasses, openTeacherClasses: openTeacherClasses}) */ }
    this.loadEvents();
  },

  getScreenContent: function() {
    switch (this.state.screen) {
      case "loggedIn":
        return (
        <div>
          <Header userName={this.state.fullName} onUpdate={this.updateScreen} />
          <MyEventsContainer onUpdate={this.updateScreen} profile={this.state.user} />
          <CalendarContainer onUpdate={this.updateScreen} calendarUpdate={this.loadEvents} profile={this.state.user} openStudentClasses={this.state.openStudentClasses} openTeacherClasses={this.state.openTeacherClasses}/>
          <CreateEvent onUpdate={this.updateScreen}/>
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

  loadEvents: function() {
    $.get('/classrooms', function(resp){
      this.setState({openStudentClasses: resp.students, openTeacherClasses: resp.teachers});
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

// <CreateEvent onUpdate={this.updateScreen}/>
// updateScreen: function(newScreen, newStates) {
//   this.setState({
//     screen: newScreen
//   });
//   var newStatesClone = {};
//   for (var state in newStates) {
//     newStatesClone[state] = newStates[state];
//   }
//   this.setState(newStatesClone);
//   // var screens = ""
//
// },
// getScreenContent: function() {
//   switch(this.state.screen) {
//     case "nav":
//       return (
//         <Nav />
//       )
//     }
//   }
// },
// getNav: function() {
// return (<Nav screen={this.state.screen} loggedIn={this.state.loggedIn} onUpdate={this.updateScreen} />);
// },
