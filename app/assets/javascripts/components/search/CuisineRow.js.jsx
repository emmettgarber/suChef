var CuisineRow = React.createClass({
  render: function() {
    var cuisine = this.props.cuisine.name
    return (
      <tr>
        <td>{cuisine}</td>
      </tr>
    );
  }
});
