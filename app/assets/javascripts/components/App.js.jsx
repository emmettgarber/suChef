var App = React.createClass({
  getInitialState: function() {
    return {
      user: undefined,
      userName: undefined,
      loggedIn: false,
      screen: "none"
    };
  },
  componentWillMount: function() {
    //update backend to have sessions/info route
    $.get('/sessions/info', function(resp) {
      console.log(resp);
      if (resp) {
        this.setState({loggedIn: true, user: resp.id, userName: resp.email});
      } else {
        this.setState({loggedIn: false});
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
    $('body').removeClass(screens).addClass(newScreen);

  },
  getEditProfile: function() {
    if ("getUserProfile") {
      return (<EditProfile onUpdate={this.updateScreen} />);
    }
  },

  render: function() {
    if (this.state.loggedIn) {
      return (
        <div id="page">
          <Header userName={this.state.userName} />
          <div className="displayEditProfile">
            {this.getEditProfile("getUserProfile")}
          </div>
          <MyEventsContainer />
          <CreateEvent />
          <CalendarContainer/>
        </div>
  );
    }
    else {
      return <Splash />;
    }
  }

});

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
