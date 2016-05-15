var MyEventsContainer = React.createClass({
  getInitialState: function() {
     return {display: true};
  },
  render: function() {
    return (
      <div><EventGrid/>I am an EventGrid</div>);
  }
});
