var Header = React.createClass({
  // helper functions for this view to use
  render: function(){
    return(
      <header>
        <Logo />
      <Nav name={this.props.userName}/>
      </header>
    );
  }
});
