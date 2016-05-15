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
      <div className="header">
        <nav className="main-nav" style={this.state.style}>
          <div className="left-side">
            <p>Welcome, <button onClick={this.handleClick}>{this.props.name}</button></p>
            <a href="/signout">Sign Out</a>
          </div>
          <table className="name-logout">
            <tr>
              <td className="middle">
                <p className="stats-title">My Stats</p>
              </td>
            </tr>
            <tr>
              <td className="key">Video Count</td>
              <td className="number">5</td>
            </tr>
            <tr>
              <td></td>
              <td className="key">Rating</td>
              <td className="number">5</td>
            </tr>
          </table>
          {/* <li>{this.editProfile()}</li> */}
        </nav>
        {/*<div onClick={this.editProfile()}></div>*/}
      {/*<div>{this.editProfile()}</div>*/}
      </div>
    );
  }

});
