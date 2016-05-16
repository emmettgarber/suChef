var CalendarDisplay = React.createClass({
  getClassrooms: function(studentObject, teacherObject) {
    return (
      <div className="main-cal-container">
        <h1>Here are some open events! RSVP to one if you want</h1>
        <p className="notice"><span id="pink">PINK</span> means this event needs a student, <span id="yellow">YELLOW</span> means it needs a teacher</p>
        <div className="events-sub-container">
        {studentObject.map(function(studentClassroom, i) {
          var time = moment(studentClassroom.starttime).format('dddd [at] h:mm a').toString();
          return (
            <div className="student" key={"student-" + i}>
              <p>{studentClassroom.dish}</p>
              <p>{studentClassroom.cuisine}</p>
              <p>{time}</p>
              <p>RSVP</p>
            </div>
          )
        }, this)}
        {teacherObject.map(function(teacherClassroom, i) {
          var time = moment(teacherClassroom.starttime).format('dddd [at] h:mm a').toString();
          return (<div className="teacher" key={"teacher-" + i}>
            <p>{teacherClassroom.dish}</p>
            <p>{teacherClassroom.cuisine}</p>
            <p>{time}</p>
            <p>RSVP</p>
          </div>)
        }, this)}
        </div>
      </div>
    );
  },

  render: function() {
    console.log(this.props);
    studentObj = this.props.openStudentClasses;
    teacherObj = this.props.openTeacherClasses;
    return(
      <div className="class-card">
        {this.getClassrooms(studentObj, teacherObj)}
      </div>
    )
  }
});
