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
          <div className="img-collection">
            <div className="header-img"></div>
            <div className="header-img"><Steak/></div>
            <div className="header-img"></div>
            <div className="header-img"><Knives/></div>
            <div className="header-img"></div>
            <div className="header-img"><Corn/></div>
          </div>
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
          <div className="img-collection">
            <div className="header-img"></div>
            <div className="header-img"><PizzaSlice/></div>
            <div className="header-img"></div>
            <div className="header-img"><Fish/></div>
            <div className="header-img"></div>
            <div className="header-img"><Donut/></div>
          </div>
          {/* <li>{this.editProfile()}</li> */}
        </nav>
        {/*<div onClick={this.editProfile()}></div>*/}
      {/*<div>{this.editProfile()}</div>*/}
      </div>
    );
  }

});
