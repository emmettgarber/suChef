var EditProfile = React.createClass({
  getInitialState: function() {
    return {
      checked: this.props.checked || false,
      profile: this.props.profile
    };
  },
  componentWillMount: function() {

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
    }.bind(this));
  },
  getAllProperties: function(items) {
    return items.map(function(listValue, i) {
      return <li key={i}>{listValue}</li>
    })
  },

  render: function() {
    var profileArray = this.state.profile.verifiedAwesome;
    return (
      <div>
        <h1 className="profile-header">Welcome to your profile</h1>
          <div className="right-side">
              <div>
                <div className="middle">
                  <p className="stats-title">My Stats</p>
                </div>
              </div>
              <div>
                <div className="key"># of Chats</div>
                <div className="number">5</div>
              </div>
              <div>
                <div></div>
                <div className="key">Rating</div>
                <div className="number">5</div>
              </div>
          </div>
        <h3>Verified awesome in the following cuisines</h3>
        <ul>
          {this.getAllProperties(profileArray)}
        </ul>
      </div>);
  }
})
