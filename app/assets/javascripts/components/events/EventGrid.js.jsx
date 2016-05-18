var EventGrid = React.createClass({

  renderApprBox: function(viewing) {
    if (moment().isBefore(moment(viewing.starttime).add(30, 'minutes'))) {
      return <HangoutButton profile={this.props.profile} room={viewing}/>
    } else {
      return <ReviewForm profile={this.props.profile} viewing={viewing} updateProfile={this.props.updateProfile}/>
    }
  },

  getIcon: function(viewing) {
    if (viewing.instructor_id == null && viewing.apprentice_id != null) {
      return <Sad/>
    } else if (viewing.instructor_id != null && viewing.apprentice_id == null) {
      return <Sad/>
    } else {
      return <Happy/>
    }
  },

  getClasses: function(array) {
    return array.map(function(viewing, i) {
      var time = moment(viewing.starttime).format("dddd MMMM Do, [at] h:mm a").toString();
      return (
        <div key={i} className="fillers">
          <div className="body">
            <p>{viewing.user_type}{this.getIcon(viewing)}</p>
          </div>
          <div className="body">
            <p>{viewing.dish}</p>
          </div>
          <div className="body">
            <p>{time}</p>
          </div>
          <div className="body">
            {this.renderApprBox(viewing)}
          </div>
        </div>
        )
      }, this)
  },

  render: function() {

    return (
      <div className="my-events-grid">
        <div className="cal-headers">
        <div className="header">
          <p>Type/Role</p>
        </div>
          <div className="header">
            <p>Event</p>
          </div>
          <div className="header">
            <p>Time</p>
          </div>
          <div className="header">
            <p>Hangout link</p>
          </div>
        </div>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={2000}>
          {this.getClasses(this.props.profile.kitchen_hashes)}
        </ReactCSSTransitionGroup>
      </div>);
  }
})
