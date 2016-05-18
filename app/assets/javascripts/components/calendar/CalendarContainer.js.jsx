var CalendarContainer = React.createClass({
  getInitialState: function() {
    return {
      display: true,

    };
  },
  render: function(){
    console.log(this.props.allClasses)
    return (
      <div>
        <CalendarDisplay
          openStudentClasses={this.props.openStudentClasses}
          openTeacherClasses={this.props.openTeacherClasses}
          openClasses={this.props.openClasses}
          calendarUpdate={this.props.calendarUpdate}
        />
      </div>
    );
  }
});
