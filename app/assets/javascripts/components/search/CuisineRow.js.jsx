var CuisineRow = React.createClass({
  render: function() {
    var cuisine = this.props.cuisine.cuisine
    return (
      <tr>
        <td>{cuisine}</td>
      </tr>
    );
  }
});
