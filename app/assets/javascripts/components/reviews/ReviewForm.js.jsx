var ReviewForm = React.createClass({
  getInitialState: function() {
    return {
      rating: 0
    }
  },

  handleChange: function(event) {
    var rating = event.target.value
    this.handleSubmit(rating);
  },

  handleSubmit: function(rating) {
    var data = {};
    data["classId"] = this.props.viewing.id;
    data["ratePerson"] = this.getOtherPerson();
    data["rating"] = rating
    $.ajax({
      method: 'post',
      url: '/classrooms/rating',
      data: data
    }).done(function(resp) {
      this.props.updateProfile();
    }.bind(this));
  },

  getOtherPerson: function() {
    if (this.props.viewing.user_type === "Teacher") {
      return "Student"
    }
    else {
      return "Teacher"
    }
  },

  render: function() {
    return (
      <div className="review-form">
        <p className="rate-title">Rate Your {this.getOtherPerson()}</p>
        <select className="rate-selections" onChange={this.handleChange}>
          <option></option>
          <option value="0">Terrible</option>
          <option value="1">Ugh</option>
          <option value="2">Meh</option>
          <option value="3">Acceptable</option>
          <option value="4">Good</option>
          <option value="5">Greatness</option>
        </select>
      </div>
      )
  }
})
