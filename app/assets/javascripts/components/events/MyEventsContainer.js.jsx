var MyEventsContainer = React.createClass({
  getInitialState: function() {
    return {
      display: true,
      style: {backgroundColor: "rgb(92, 173, 87)", borderTop: "2px rgb(178, 235, 242) solid"},
      profile: this.props.profile
    };
  },
  render: function() {
    return (
      <div style={this.state.style} ><EventGrid profile={this.state.profile}/></div>);
  }
});
