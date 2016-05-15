var EditProfile = React.createClass({
  getInitialState: function() {
    return {
      checked: this.props.checked || false
    };
  },
  handleClick: function(e) {
      this.setState({checked: e.target.checked});
  },

  render: function() {
    return (
      <div style={this.state}>
        <label>
        <input
          type="checkbox"
          checked={this.state.checked}
          onClick={this.handleClick}
          value={this.props.value} />
          {this.props.label}
      </label>

      </div>);
  }
})
