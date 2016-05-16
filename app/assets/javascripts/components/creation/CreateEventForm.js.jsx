var CreateEventForm = React.createClass({
  getInitialState: function() {
    return {
      cuisine: "",
      starttime: "05:00:00",
      endtime: "06:00:00",
      role: "viewer",
      dish: '',
      month: moment().format("MM"),
      day: moment().format("D")
    }
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
      console.log("Hello");
    });
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
    var hour = moment().hour(0).startOf('hour').add(time, 'm');
    return <option value={hour.format("HH:mm:ss")}>{hour.format("hh:mm a")}</option>
  },

  render: function() {
    var rows = [];
    for (var i = 0; i < 1440; i += 30) {
      rows.push(this.renderTimeSlots(i));
    };

    return (
      <div className="whole-form">
        <h1 className='form-title'><span className="small-icon"><Fish/></span>...Create Your Event by Filling This Out...<span className="small-icon"><Sushi/></span></h1>
        <form className="create-form" ref="createEventForm" onSubmit={this.handleSubmit}>
          <label for="startTime">Select Start Time:</label>
          <select name="startTime" ref="startTime" value={this.state.startTime} onChange={this.handleChange}>
            <option value="00:00:00">12:00 AM</option>
            <option value="00:30:00">12:30 AM</option>
            <option value="01:00:00">01:00 AM</option>
            <option value="01:30:00">01:30 AM</option>
            <option value="02:00:00">02:00 AM</option>
            <option value="02:30:00">02:30 AM</option>
            <option value="03:00:00">03:00 AM</option>
            <option value="03:30:00">03:30 AM</option>
            <option value="04:00:00">04:00 AM</option>
            <option value="04:30:00">04:30 AM</option>
            <option value="05:00:00">05:00 AM</option>
            <option value="05:30:00">05:30 AM</option>
            <option value="06:00:00">06:00 AM</option>
            <option value="06:30:00">06:30 AM</option>
            <option value="07:00:00">07:00 AM</option>
            <option value="07:30:00">07:30 AM</option>
            <option value="08:00:00">08:00 AM</option>
            <option value="08:30:00">08:30 AM</option>
            <option value="09:00:00">09:00 AM</option>
            <option value="09:30:00">09:30 AM</option>
            <option value="10:00:00">10:00 AM</option>
            <option value="10:30:00">10:30 AM</option>
            <option value="11:00:00">11:00 AM</option>
            <option value="11:30:00">11:30 AM</option>
            <option value="12:00:00">12:00 PM</option>
            <option value="12:30:00">12:30 PM</option>
            <option value="13:00:00">01:00 PM</option>
            <option value="13:30:00">01:30 PM</option>
            <option value="14:00:00">02:00 PM</option>
            <option value="14:30:00">02:30 PM</option>
            <option value="15:00:00">03:00 PM</option>
            <option value="15:30:00">03:30 PM</option>
            <option value="16:00:00">04:00 PM</option>
            <option value="16:30:00">04:30 PM</option>
            <option value="17:00:00">05:00 PM</option>
            <option value="17:30:00">05:30 PM</option>
            <option value="18:00:00">06:00 PM</option>
            <option value="18:30:00">06:30 PM</option>
            <option value="19:00:00">07:00 PM</option>
            <option value="19:30:00">07:30 PM</option>
            <option value="20:00:00">08:00 PM</option>
            <option value="20:30:00">08:30 PM</option>
            <option value="21:00:00">09:00 PM</option>
            <option value="21:30:00">09:30 PM</option>
            <option value="22:00:00">10:00 PM</option>
            <option value="22:30:00">10:30 PM</option>
            <option value="23:00:00">11:00 PM</option>
            <option value="23:30:00">11:30 PM</option>
          </select>
          <label for="endTime">Select End Time:</label>
          <select name="endTime" ref="endTime" value={this.state.endTime} onChange={this.handleChange}>
            <option value="00:00:00">12:00 AM</option>
            <option value="00:30:00">12:30 AM</option>
            <option value="01:00:00">01:00 AM</option>
            <option value="01:30:00">01:30 AM</option>
            <option value="02:00:00">02:00 AM</option>
            <option value="02:30:00">02:30 AM</option>
            <option value="03:00:00">03:00 AM</option>
            <option value="03:30:00">03:30 AM</option>
            <option value="04:00:00">04:00 AM</option>
            <option value="04:30:00">04:30 AM</option>
            <option value="05:00:00">05:00 AM</option>
            <option value="05:30:00">05:30 AM</option>
            <option value="06:00:00">06:00 AM</option>
            <option value="06:30:00">06:30 AM</option>
            <option value="07:00:00">07:00 AM</option>
            <option value="07:30:00">07:30 AM</option>
            <option value="08:00:00">08:00 AM</option>
            <option value="08:30:00">08:30 AM</option>
            <option value="09:00:00">09:00 AM</option>
            <option value="09:30:00">09:30 AM</option>
            <option value="10:00:00">10:00 AM</option>
            <option value="10:30:00">10:30 AM</option>
            <option value="11:00:00">11:00 AM</option>
            <option value="11:30:00">11:30 AM</option>
            <option value="12:00:00">12:00 PM</option>
            <option value="12:30:00">12:30 PM</option>
            <option value="13:00:00">01:00 PM</option>
            <option value="13:30:00">01:30 PM</option>
            <option value="14:00:00">02:00 PM</option>
            <option value="14:30:00">02:30 PM</option>
            <option value="15:00:00">03:00 PM</option>
            <option value="15:30:00">03:30 PM</option>
            <option value="16:00:00">04:00 PM</option>
            <option value="16:30:00">04:30 PM</option>
            <option value="17:00:00">05:00 PM</option>
            <option value="17:30:00">05:30 PM</option>
            <option value="18:00:00">06:00 PM</option>
            <option value="18:30:00">06:30 PM</option>
            <option value="19:00:00">07:00 PM</option>
            <option value="19:30:00">07:30 PM</option>
            <option value="20:00:00">08:00 PM</option>
            <option value="20:30:00">08:30 PM</option>
            <option value="21:00:00">09:00 PM</option>
            <option value="21:30:00">09:30 PM</option>
            <option value="22:00:00">10:00 PM</option>
            <option value="22:30:00">10:30 PM</option>
            <option value="23:00:00">11:00 PM</option>
            <option value="23:30:00">11:30 PM</option>
          </select>
          <label for="language">Preferred Language:</label>
          <select name="language" ref="language" onChange={this.handleChange}>
              <option value="English">English</option>
              <option value="Cantonese">Cantonese</option>
              <option value="French">French</option>
              <option value="Mandarin">Mandarin</option>
              <option value="Spanish">Spanish</option>
              <option value="Tagalog">Tagalog</option>
          </select>
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
