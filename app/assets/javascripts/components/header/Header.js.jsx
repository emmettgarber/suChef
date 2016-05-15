var Header = React.createClass({
  getInitialState: function() {
    return {display: true};
  },
  // helper functions for this view to use
  render: function(){
    return(
      <header className="page-header">
        <p className="main-header-text">Sú Chef</p>
        <Nav name={this.props.userName} onUpdate={this.props.onUpdate}/>
      </header>
    );
  }
});
