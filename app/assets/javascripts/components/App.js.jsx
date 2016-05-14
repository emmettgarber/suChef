var App = React.createClass({
  getInitialState: function() {
    return {
      userId: undefined,
      loggedIn: false
    };
  },
  componentWillMount: function() {
    //update backend to have sessions/info route
    $.get('/sessions/info', function(resp) {
      console.log(resp.session_id);
      if (resp.session_id) {
        this.setState({loggedIn: true, userId: resp.session_id});
      } else {
        this.setState({loggedIn: false});
      }
    }.bind(this));
  },

  render: function() {
    if (this.state.loggedIn) {
      return <div>We're logged in!</div>;
    }
    else {
      return <div>We're not logged in!</div>;
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
