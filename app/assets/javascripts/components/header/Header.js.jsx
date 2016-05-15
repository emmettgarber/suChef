var Header = React.createClass({
  getInitialState: function() {
    return {display: true};
  },
  // helper functions for this view to use
  render: function(){
    return(
      <header>
        <Logo />
        <Nav name={this.props.userName} onUpdate={this.props.onUpdate}/>
      </header>
    );
  }
});
