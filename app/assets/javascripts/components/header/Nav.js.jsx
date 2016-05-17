var Nav = React.createClass({
  getInitialState: function() {
    return {
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
      <div className="nav-header">
        <nav className="main-nav" style={this.state.style}>
          <div className="left-side">
            <p className="username">Welcome, <a onClick={this.handleClick}>{this.props.name}</a></p>
            <a className="signout" href="/signout">Sign Out</a>
          </div>
        </nav>
      </div>
    );
  }

});
