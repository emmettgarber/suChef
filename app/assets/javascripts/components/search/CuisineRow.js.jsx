var CuisineRow = React.createClass({
  render: function() {
    var cuisine = this.props.cuisine
    console.log(cuisine);
    return (
      <tr>
        <td>{cuisine}</td>
      </tr>
    );
  }
});
