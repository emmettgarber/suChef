var App = React.createClass({
  getInitialState: function() {
    return {
      userId: undefined
    };
  },
  componentDidMount: function() {
    //update backend to have sessions/info route
    $.get('/sessions/info', function(resp) {
      if (resp.session_id === false) {
        this.setState({loggedIn: false});
      } else {
        this.setState({loggedIn: true, userId: resp.session_id});
      }
    }.bind(this));
  },

  updateScreen: function(newScreen, newStates={}){
    this.setState({
      screen: newScreen
    });
    var newStatesClone = {};
    for (var state in newStates) {
      newStatesClone[state] = newStates[state];
    }
    this.setState(newStatesClone);
    // var screens = ""

  },
  render: function() {
    // console.log("hey ya'll");
    return(
      <Header/>
    {this.props.username}
    );
  }

});
