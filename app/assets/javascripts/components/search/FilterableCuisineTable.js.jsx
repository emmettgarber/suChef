var FilterableCuisineTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: ''
    }
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    })
  },

  render: function() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <CuisineTable
          cuisines={this.props.cuisines}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
});
