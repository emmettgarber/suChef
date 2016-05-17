var EditProfile = React.createClass({
  getInitialState: function() {
    return {
      checked: this.props.checked || false,
      profile: this.props.profile
    };
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

  produceDonuts: function(items) {
    for (var i = 0; i < items; i++) {
      return <div className="small-donut"><Donut/></div>
    }
  },

  render: function() {
    var profileArray = this.state.profile.verifiedAwesome;
    return (
      <div className="edit-profile">
        <h1 className='profile-header'><span className="small-icon"><Donut/></span> Welcome to your profile <span className="small-icon"><Bacon/></span></h1>
        <div className="table">
          <div className="left-side">
            <div className= "title"><p>Overall Rating: </p></div>
            <div className= "title"><p>Times Taught a Kitchen: </p></div>
            <div className= "title"><p>Times as a Student: </p></div>
          </div>
          <div className="right-side">
            <div className= "body"><p>{this.props.profile.totalAverage}</p></div>
            <div className= "body">{this.produceDonuts(this.props.profile.teachings.length)}</div>
            <div className= "body"><p>{this.props.profile.viewings.length}</p></div>
          </div>
          </div>
      </div>);
  }
})
