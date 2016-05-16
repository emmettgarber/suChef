var MyEventsContainer = React.createClass({
  getInitialState: function() {
     return {
       display: true,
     };
  },
  render: function() {
    return (
      <div><EventGrid user={this.props.user} />I am an EventGrid</div>);
  }
});
