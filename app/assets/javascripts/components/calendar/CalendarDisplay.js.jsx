var CalendarDisplay = React.createClass({
  submitRSVP: function(classroomId){
      var submission = {
          classId: classroomId,
        }
      $.ajax({
        method: 'POST',
        url: '/classrooms/register',
        data: submission,
        dataType: "json",
        cache: false,
        success: function(response) {

          this.props.calendarUpdate();
        }.bind(this),
        error: function(xhr, status, err) {
        }.bind(this)
      });
  },
  getClassrooms: function(classrooms) {
    return (
      <div className="main-cal-container">
        <h1>Here are some open events! RSVP to one if you want</h1>
        <p className="notice"><span id="pink">PINK</span> means this event needs a student, <span id="yellow">YELLOW</span> means it needs a teacher</p>
        <div className="events-sub-container">
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {classrooms.map(function(kitchen, i) {
              var time = moment(kitchen.starttime).format('dddd [at] h:mm a').toString();
              return (
                <div className={"open-event " + kitchen.user_type} key={"student-" + i}>
                  <p>{kitchen.cuisine}</p>
                  <p>{kitchen.dish}</p>
                  <p>{time}</p>
                  <button classId={kitchen.id} className="submit-rsvp-button" onClick={this.submitRSVP.bind(this,kitchen.id)}>RSVP</button>
                </div>
              )
            }, this)}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  },

  render: function() {
    return(
      <div className="class-card">
        {this.getClassrooms(this.props.openClasses)}
      </div>
    )
  }
});
