var CreateEvent = React.createClass({
  render: function(){
    return (<div>
      <CreateEventForm onUpdate={this.props.profileUpdate} />
    </div>);
  }
});
