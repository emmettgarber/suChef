var App = React.createClass({
  getInitialState: function() {
    return {
      user: undefined,
      userName: undefined,
      loggedIn: false,
      screen: "loggedIn"
    };
  },

  componentWillMount: function() {
    //update backend to have sessions/info route

    $.get('/user/profile', function(resp) {
      if (resp) {
        this.setState({loggedIn: true, user: resp, userName: resp.email});
      } else {
        this.setState({loggedIn: false});
      }
    }.bind(this));
  },

  getScreenContent: function() {
    switch (this.state.screen) {
      case "loggedIn":
        return (
        <div>
          <Header userName={this.state.userName} onUpdate={this.updateScreen}/>
          <MyEventsContainer onUpdate={this.updateScreen} profile={this.state.user} />
          <CreateEvent onUpdate={this.updateScreen}/>
          {/*<CalendarContainer onUpdate={this.updateScreen} profile={this.state.user}/>*/}
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
