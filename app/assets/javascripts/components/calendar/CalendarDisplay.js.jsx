var CalendarDisplay = React.createClass({
  submitRSVP: function(classroomId){
      var submission = {
          classId: classroomId,
        }
      console.log(this);
      console.log("This is the submission data ...");
      console.log(submission);

      $.ajax({
        method: 'POST',
        url: '/classrooms/register',
        data: submission,
        dataType: "json",
        cache: false,
        success: function(response) {
          console.log("This is props.calendarUpdate ...");
          console.log(this.props.calendarUpdate);

          this.props.calendarUpdate();
          console.log("Hi Rocky, I added you to the class successfully");
        }.bind(this),
        error: function(xhr, status, err) {
          console.log(status, err.toString());
        }.bind(this)
      });
  },
  getClassrooms: function(studentObject, teacherObject) {
    return (
      <div className="main-cal-container">
        <h1>Here are some open events! RSVP to one if you want</h1>
        <p className="notice"><span id="pink">PINK</span> means this event needs a student, <span id="yellow">YELLOW</span> means it needs a teacher</p>
        <div className="events-sub-container">
        {studentObject.map(function(studentClassroom, i) {
          var time = moment(studentClassroom.starttime).format('dddd [at] h:mm a').toString();
          return (
            <div className="student open-event" key={"student-" + i}>
              <p>{studentClassroom.dish}</p>
              <p>{studentClassroom.cuisine}</p>
              <p>{time}</p>
              <button classId={studentClassroom.id} className="submit-rsvp-button" onClick={this.submitRSVP.bind(this,studentClassroom.id)}>RSVP</button>
            </div>
          )
        }, this)}
        {teacherObject.map(function(teacherClassroom, i) {
          var time = moment(teacherClassroom.starttime).format('dddd [at] h:mm a').toString();
          return (<div id="teacher" className="teacher open-event" key={"teacher-" + i}>
            <p>{teacherClassroom.dish}</p>
            <p>{teacherClassroom.cuisine}</p>
            <p>{time}</p>
            <button classId={teacherClassroom.id} className="submit-rsvp-button" onClick={this.submitRSVP.bind(this,teacherClassroom.id)}>RSVP</button>
          </div>)
        }, this)}
        </div>
      </div>
    );
  },

  render: function() {
    return(
      <div className="class-card">
        {this.getClassrooms(this.props.openStudentClasses, this.props.openTeacherClasses)}
      </div>
    )
  }
});
