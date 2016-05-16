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
      console.log(time)
      return (
        <div key={i} className="fillers">
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
  render: function() {
    var viewings = this.state.profile.viewings


    return (
      <div className="my-events-grid">
        <div className="cal-headers">
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
      </div>);
  }
})
