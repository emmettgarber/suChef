var CalendarContainer = React.createClass({
  getInitialState: function() {
    return {
      display: true,
      profile: this.props.profile,
      openStudentClasses: [],
      openTeacherClasses: []
    };
  },
  componentWillMount: function(){
    $.get('/classrooms', function(resp){
      this.setState({openStudentClasses: resp.students, openTeacherClasses: resp.teachers});
    }.bind(this));
  },
  render: function(){
    return (<div><CalendarDisplay openStudentClasses={this.state.openStudentClasses} openTeacherClasses={this.state.openTeacherClasses}/></div>);
  }
});
