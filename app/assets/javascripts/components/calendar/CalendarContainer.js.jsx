var CalendarContainer = React.createClass({
  getInitialState: function() {
    return {display: true};
  },
  render: function(){
    return (<div><CalendarDisplay/></div>);
  }
});
