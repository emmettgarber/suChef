var CuisineTable = React.createClass({
  render: function() {
    if(this.props.filterText.length < 2) return null;

    console.log(this.props.cuisines);

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
            {
              this.props.cuisines.map(function(cuisine) {
                return <CuisineCategoryRow cuisine={cuisine.cuisine} key={cuisine.id} />
            })
          }
        </tbody>
      </table>
    )
  }
});
