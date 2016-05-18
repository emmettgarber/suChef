var FilterableCuisineTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      cuisinesToShow: []
    }
  },

  handleUserInput: function(filterText) {
    this.setState({
      cuisinesToShow: this.props.cuisines.filter(function(cuisine) {
        return cuisine.cuisine.indexOf(filterText) >= 0;
      }, this),

      filterText: filterText
    });
  },

  render: function() {

    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <CuisineTable
          cuisines={this.state.cuisinesToShow}
          filterText={ this.state.filterText }
        />
      <CalendarContainer
          openClasses={this.state.cuisinesToShow}
          calendarUpdate={this.props.calendarUpdate}
        />
      </div>
    );
  }
});
