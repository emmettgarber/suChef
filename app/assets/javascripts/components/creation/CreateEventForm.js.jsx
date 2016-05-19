var CreateEventForm = React.createClass({
  getInitialState: function() {
    return {
      cuisine: "",
      starttime: moment().startOf("hour").add(1, 'h').format("HH:mm:ss"),
      endtime: moment().startOf("hour").add(2, 'h').format("HH:mm:ss"),
      role: "viewer",
      dish: '',
      month: moment().format("MM"),
      day: moment().format("D"),
      numOfDays: moment().startOf("month").daysInMonth()
    }
  },

  handleMonthChange: function(event) {
    var nextState = {};
    nextState["month"] = event.target.value;
    nextState["numOfDays"] = moment().month(parseInt(event.target.value) - 1).daysInMonth();
    this.setState(nextState);
  },

  handleChange: function(event) {
    var field = event.target.name
    var nextState = {};
    nextState[field] = event.target.value;
    this.setState(nextState);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var data = this.getFormData();
    $.ajax({
      url: '/classroom',
      method: 'post',
      data: {classroom: data}
    }).done(function(resp) {
      this.props.onUpdate();
      this.setState({cuisine: '', dish: ''})
    }.bind(this));
  },

  getFormData: function() {
    var data = {}
    for (props in this.refs) {
      data[props] = this.refs[props].value;
    };
    data["starttime"] = this.formatTime(data.starttime);
    data["endtime"] = this.formatTime(data.endtime);
    return data;
  },

  formatTime: function(time) {
    var year = moment().format("YYYY");
    var month = this.state.month;
    var day = this.state.day;
    var time = time;
    var timeZone = moment().format("Z");
    return year + "-" + month + "-" + day + " " + time + " " + timeZone
  },

  renderTimeSlots: function(time) {
    var hour = moment().startOf('hour').add(1, 'h').add(time, 'm');
    return <option value={hour.format("HH:mm:ss")}>{hour.format("hh:mm a")}</option>
  },

  renderMonths: function(month) {
    var month = moment().month(month).startOf('month')
    return <option value={month.format("MM")}>{month.format("MMMM")}</option>
  },

  renderDays: function(day) {
    return <option value={day + 1}>{day + 1}</option>
  },

  render: function() {
    var timeSlots = [];
    var months = [];
    var days = [];
    for (var i = 0; i < moment().endOf('day').diff(moment().endOf('hour'), 'minutes'); i += 30) {
      timeSlots.push(this.renderTimeSlots(i));
    };
    for (var i = 0; i < 12; i ++) {
      months.push(this.renderMonths(i));
    };
    for (var i = 0; i < this.state.numOfDays; i ++) {
      days.push(this.renderDays(i));
    };

    return (
      <div className="whole-form">
        <h1 className='form-title'><span className="small-icon"><Fish/></span>...Create Your Event by Filling This Out...<span className="small-icon"><Sushi/></span></h1>
        <form className="create-form" ref="createEventForm" onSubmit={this.handleSubmit}>
          <label for="starttime">Select Start Time:</label>
          <select name="starttime" ref="starttime" value={this.state.starttime} onChange={this.handleChange}>
            {timeSlots}
          </select>
          <label for="endtime">Select End Time:</label>
          <select name="endtime" ref="endtime" value={this.state.endtime} onChange={this.handleChange}>
            {timeSlots}
          </select>
          <select ref="month" name="month" value={this.state.month} onChange={this.handleMonthChange}>
            {months}
          </select>
          <select ref="day" name="day" value={this.state.day} onChange={this.handleChange}>
            {days}
          </select>
          <label for="language">Preferred Language:</label>
          <select name="language" ref="language" onChange={this.handleChange}>
              <option value="English">English</option>
              <option value="Cantonese">Cantonese</option>
              <option value="French">French</option>
              <option value="Mandarin">Mandarin</option>
              <option value="Spanish">Spanish</option>
              <option value="Tagalog">Tagalog</option>
          </select><br/>
          <label for="cuisine">Cuisine: </label>
          <input type="text" name="cuisine" ref="cuisine" value={this.state.cuisine} onChange={this.handleChange} /><br />
          <label for="role">Who Are You? </label>
          <select name="role" ref="role">
            <option value="apprentice">Viewer</option>
            <option value="instructor">Teacher</option>
          </select>
          <label for="role">What Kind of Kitchen?</label>
          <select name="type" ref="type" onChange={this.handleChange}>
              <option value="instructional">Instructional</option>
              <option value="Casual">Casual</option>
          </select>
          <label for="dish">Dish:</label>
          <input type="text" name="dish" ref="dish" value={this.state.dish} onChange={this.handleChange} />
          <input type="submit" value="Create This Kitchen!" />
        </form>
      </div>
    )
  }
})
