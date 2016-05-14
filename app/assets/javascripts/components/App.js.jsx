var App = React.createClass({
  getInitialState: function() {
    return {
      user: undefined,
      userName: undefined,
      loggedIn: false
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

  render: function() {
    if (this.state.loggedIn) {
      return (<Header userName={this.state.userName} />);
    }
    else {
      return <div>Splash Screen!</div>;
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
