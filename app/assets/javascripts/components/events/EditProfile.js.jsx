var EditProfile = React.createClass({
  getInitialState: function() {
    return {
      checked: this.props.checked || false
    };
  },
  componentWillMount: function() {
    event.preventDefault();

    $.ajax({

    })
  },
  handleClick: function(e) {
      this.setState({checked: e.target.checked});
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var target = $(event.target);
    $.ajax({
      type: "POST",
      url: '/users',
      data: target.serialize()
    }).done(function(resp){
      if(resp.errors) {
        this.setState({errorMessge: resp.errors[0]})
      } else if (resp.result === 'success') {
        this.props.onUpdate('loggedIn', {userId: resp.id})
      }
    }.bind(this))
  },
  render: function() {
    var cuisineObject = {french: true, mexican: false, italian: false, lithuanian: true};
    return (
      <div style={this.state}>
        Hello!
      {/*/ <form>
      //   <label>
      //     <input
      //     type="checkbox"
      //     checked={this.props.checked}
      //     onClick={this.handleClick}
      //     value={this.props.value}
      //     />
      //   </label>
      //   <button type='submit' onSubmit={handleSubmit}>Update Profile</button>
      // </form>*/}

      </div>);
  }
})
