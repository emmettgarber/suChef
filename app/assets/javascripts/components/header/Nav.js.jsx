var Nav = React.createClass({

  handleLogoutClick: function() {

  },

  render: function() {
    return (
      <nav>
        <li>Welcome, {this.props.name}</li>
        <li><a href="/signout">Sign Out</a></li>
      </nav>
    );
  }

});
