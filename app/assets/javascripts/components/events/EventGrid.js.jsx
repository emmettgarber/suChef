var EventGrid = React.createClass({
  getInitialState: function () {
    return {
      profile: this.props.profile
    }
  },
  getDefaultProps: function() {
    return {
      format: 'dddd [at] h:mm a'
    }
  },
  getViewings: function(viewingsArray) {
    return viewingsArray.map(function(viewing, i) {
      var time = moment(viewing.starttime).format(this.props.format).toString();
      return (
        <div key={i} className="fillers">
        <div className="body">
          <p>Student</p>
        </div>
          <div className="body">
            <p>{viewing.dish}</p>
          </div>
          <div className="body">
            <p>{time}</p>
          </div>
          <div className="body">
            <p>{viewing.hangout_url}</p>
          </div>
        </div>
        )
      }, this)
  },

  getTeachings: function(teachingsArray) {
    return teachingsArray.map(function(teaching, i) {
      var time = moment(teaching.starttime).format(this.props.format).toString();
      return (
        <div key={i} className="fillers">
        <div className="body">
          <p>Teacher</p>
        </div>
          <div className="body">
            <p>{teaching.dish}</p>
          </div>
          <div className="body">
            <p>{time}</p>
          </div>
          <div className="body">
            <p>{teaching.hangout_url}</p>
          </div>
        </div>
        )
      }, this)
  },
  render: function() {
    var viewings = this.state.profile.viewings
    var teachings = this.state.profile.teachings

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
        {this.getViewings(viewings)}
        {this.getTeachings(teachings)}
      </div>);
  }
})
