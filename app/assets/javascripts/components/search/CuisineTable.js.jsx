var CuisineTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCuisine = null;
    this.props.cuisines.forEach(function(cuisine){
      if (cuisine.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      if (cuisine.name !== lastCuisine) {
        rows.push(<CuisineCategoryRow cuisine={cuisine.cuisine} key={cuisine.cuisine} />);
      }
      rows.push(<CuisineRow cuisine={cuisine} key={cuisine.id} />);
      lastCuisine = cuisine.cuisine;
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});
