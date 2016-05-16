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
      <form onSubmit={this.handleSubmit}>
        <label for="starttime">Select Start Time:</label><br />
        <select name="starttime" ref="starttime" value={this.state.starttime} onChange={this.handleChange}>
          {rows}
        </select><br />
        <label for="endtime">Select End Time:</label><br />
        <select name="endtime" ref="endtime" value={this.state.endtime} onChange={this.handleChange}>
          {rows}
        </select><br />
        <select ref="month" name="month" value={this.state.month} onChange={this.handleChange}>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
      </select>
      <select ref="day" name="day" value={this.state.day} onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <label for="cuisine">Cuisine</label>
        <input type="text" name="cuisine" ref="cuisine" value={this.state.cuisine} onChange={this.handleChange} /><br />
        <select name="role" ref="role">
          <option value="apprentice">Viewer</option>
          <option value="instructor">Teacher</option>
        </select>
        <select name="classroomFormat" ref="classroomFormat" onChange={this.handleChange}>
            <option value="instructional">Instructional</option>
            <option value="casual">Casual</option>
        </select>
        <label for="language">Preferred Language:</label>
        <select name="language" ref="language" onChange={this.handleChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Cantonese">Cantonese</option>
            <option value="French">French</option>
            <option value="Lithuanian">Lithuanian</option>
            <option value="Mandarin">Mandarin</option>
            <option value="Polish">Polish</option>
        </select>
        <label for="dish">Dish:</label>
        <input type="text" name="dish" ref="dish" value={this.state.dish} onChange={this.handleChange} />
        <textarea name="description" ref="description" placeholder="Describe what a burrito is."></textarea>
        <input type="submit" value="Create Event" />
      </form>
    )
  }
})
