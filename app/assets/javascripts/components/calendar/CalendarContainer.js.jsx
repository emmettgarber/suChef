var CalendarContainer = React.createClass({
  getInitialState: function() {
    return {
      display: true,

    };
  },
  render: function(){
    console.log(this.props);
    return (
      <div>
        <CalendarDisplay openStudentClasses={this.props.openStudentClasses} openTeacherClasses={this.props.openTeacherClasses} calendarUpdate={this.props.calendarUpdate}/>
      </div>
    );
  }
});
