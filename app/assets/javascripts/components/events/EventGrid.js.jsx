var EventGrid = React.createClass({
  render: function() {
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
            <p>Person</p>
          </div>
          <div className="header">
            <p>Hangout link</p>
          </div>
        </div>
        <div className="fillers">
          <div className="body">
            <p>Making Garlic Popcorn</p>
          </div>
          <div className="body">
            <p>Tuesday @ 11:11am</p>
          </div>
          <div className="body">
            <p>Rocky, Lisa, Sean</p>
          </div>
          <div className="body">
            <p>Link Here</p>
          </div>
        </div>
      </div>);
  }
})
