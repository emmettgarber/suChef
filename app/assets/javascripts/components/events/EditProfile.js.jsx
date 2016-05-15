var EditProfile = React.createClass({
  getInitialState: function() {
    return {
      display: false,
      backgroundColor: "blue",
      height: 100,
      width: 100
    };
  },

  render: function() {
    return <div style={this.state}>Hello</div>
  }
})
