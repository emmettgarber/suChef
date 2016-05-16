var CalendarContainer = React.createClass({
  getInitialState: function() {
    return {
      display: true,
      profile: this.props.profile
    };
  },
  componentWillMount: function(){
    $.get('/classrooms', function(resp){
      console.log(resp)
    }.bind(this));

  },
  render: function(){
    return (<div><CalendarDisplay/></div>);
  }
});
