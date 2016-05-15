var Nav = React.createClass({
  getInitialState: function() {
    return {
      backgroundColor: "blue",
      height: 100,
      width: 100,
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
    return (<div className="Profile"><EditProfile /></div>);
  },

  render: function() {
    return (
      <div className="header">
        <nav id="main-nav">
          <li>Welcome, <button onClick={this.handleClick()}>{this.props.name}</button></li>
          <li><a href="/signout">Sign Out</a></li>
          {/* <li>{this.editProfile()}</li> */}
        </nav>
        <div onClick={this.editProfile()}></div>
      </div>
    );
  }

});
