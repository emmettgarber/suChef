var EventGrid = React.createClass({
  getClasses: function(array) {
    return array.map(function(viewing, i) {
      var time = moment(viewing.starttime).format("dddd MMMM Do, [at] h:mm a").toString();
      var holder = viewing
      // var now = moment();
      // var when = moment(viewing.starttime);
      // console.log(moment(now, "DD/MM/YYYY HH:mm:ss").diff(moment(when,"DD/MM/YYYY HH:mm:ss"));
      return (
        <div key={i} className="fillers">
        <div className="body">
          <p>{viewing.user_type}</p>
        </div>
          <div className="body">
            <p>{viewing.dish}</p>
          </div>
          <div className="body">
            <p>{time}</p>
          </div>
          <div className="body">
            <HangoutButton 
              profile= {this.props.profile} room= {holder}
            />
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
