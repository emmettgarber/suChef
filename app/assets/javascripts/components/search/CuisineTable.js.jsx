var CuisineTable = React.createClass({
  filteredCuisines: function() {
    if(this.props.filterText.length < 2) return [];

    return this.props.cuisines.filter(function(cuisine) {
      return cuisine.cuisine.indexOf(this.props.filterText) >= 0;
    }, this);
  },
  render: function() {
    if(this.props.filterText.length < 2) return null;
    return (<table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
            {
              this.filteredCuisines().map(function(cuisine) {
                return <CuisineCategoryRow cuisine={cuisine.cuisine} key={cuisine.id} />
            })
          }
        </tbody>
      </table>)
  }
});
