var Header = React.createClass({
  getInitialState: function() {
    return {display: true};
  },
  // helper functions for this view to use
  render: function(){
    return(
      <header>
        <p className="main-header">Sú Chef</p>
        <Nav name={this.props.userName}/>
      </header>
    );
  }
});
