var Nav = React.createClass({
  getInitialState: function() {
    return {
      style: {
        backgroundColor: "green",
        height: 100,
      },

      editProfile: false
    };
  },
  handleLogoutClick: function() {

  },

  editProfile: function() {
    return (<EditProfile />);

    // $("#main-nav").append($(<EditProfile />));
  },
  handleClick: function() {
    return this.props.onUpdate("editProfile", {userName: this.props.name});
  },

  render: function() {
    return (
      <div className="header">
        <nav id="main-nav" style={this.state.style}>
          <li>Welcome, <button onClick={this.handleClick}>{this.props.name}</button></li>
          <li><a href="/signout">Sign Out</a></li>
          {/* <li>{this.editProfile()}</li> */}
        </nav>
        {/*<div onClick={this.editProfile()}></div>*/}
      {/*<div>{this.editProfile()}</div>*/}
      </div>
    );
  }

});
