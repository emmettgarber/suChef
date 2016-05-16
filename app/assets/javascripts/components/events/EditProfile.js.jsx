var EditProfile = React.createClass({
  getInitialState: function() {
    return {
      checked: this.props.checked || false,
      profile: ""
    };
  },
  componentWillMount: function() {
    event.preventDefault();
    var route = '/user/profile';
    $.getJSON(route, function(data){
      this.setState({profile: data});
    }.bind(this));
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

  render: function() {
    var cuisineObject = {french: true, mexican: false, italian: false, lithuanian: true};
    var profile = this.state.profile.verifiedAwesome
    if (this.state.profile) {
      console.log(this.state.profile.verifiedAwesome[0]);
    }
    return (
      <div>
        <h3>Verified awesome in the following cuisines</h3>
        <ul>
         {this.state.profile.map(function(index, listValue){

           return <li>{listValue.verifiedAwesome[index]}</li>;
         })}
       </ul>
      </div>);
  }
})
