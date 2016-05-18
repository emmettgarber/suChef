var MyEventsContainer = React.createClass({
  getInitialState: function() {
    return {
      display: true,
      style: {backgroundColor: "rgb(92, 173, 87)", borderTop: "2px rgb(178, 235, 242) solid"},
    };
  },
  render: function() {
    return (
      <div>
        <h1 className="events-title">Here are your upcoming events</h1>
        <div className="main-event-container" style={this.state.style} >
          <EventGrid
            profile={this.props.profile}
            updateProfile={this.props.updateProfile}
          />
        </div>
      </div>
    );
  }
});
