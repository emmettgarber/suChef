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

  produceDonuts: function() {
      return (<div className="small-icon"><Donut/></div>)
  },

  producePizza: function() {
      return (<div className="small-icon"><PizzaSlice/></div>)
  },

  produceSteak: function() {
      return (<div className="small-icon"><Steak/></div>)
  },

  render: function() {
    var profileArray = this.state.profile.verifiedAwesome;
    var donuts = [];
    var pizza = [];
    var steak = [];

    if (this.props.profile.teachings.length > 0) {
      for (var i = 0; i < this.props.profile.teachings.length; i++) {
        donuts.push(this.produceDonuts())
      }
    }

    if (this.props.profile.totalAverage > 0) {
      for (var i = 0; i < this.props.profile.totalAverage; i++) {
        donuts.push(this.produceSteaks())
      }
    }

    if (this.props.profile.viewings.length > 0) {
      for (var i = 0; i < this.props.profile.viewings.length; i++) {
        pizza.push(this.producePizza())
      }
    }
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
            <div className= "body">{steak}</div>
            <div className="body">{donuts}</div>
            <div className= "body">{pizza}</div>
          </div>
          </div>
      </div>);
  }
})
