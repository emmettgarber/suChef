var CalendarDisplay = React.createClass({
  getInitialState: function() {
  return {
      form: true
    }
  },
  submitRSVP: function(classroomId){
      var submission = {
          classId: classroomId,
        }
        console.log(submission);
      $.ajax({
        method: 'POST',
        url: '/classrooms/register',
        data: submission,
        dataType: "json"
      }).done(function(response){

      }.bind(this));
      console.log("Hi Rocky");
      this.setState({
        form: false
      })

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
            <div className="student" key={"student-" + i}>
              <p>{studentClassroom.dish}</p>
              <p>{studentClassroom.cuisine}</p>
              <p>{time}</p>
              <button classId={studentClassroom.id} className="submit-rsvp-button" onClick={this.submitRSVP.bind(this,studentClassroom.id)}>RSVP</button>
            </div>
          )
        }, this)}
        {teacherObject.map(function(teacherClassroom, i) {
          var time = moment(teacherClassroom.starttime).format('dddd [at] h:mm a').toString();
          return (<div id="teacher" className="teacher" key={"teacher-" + i}>
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
