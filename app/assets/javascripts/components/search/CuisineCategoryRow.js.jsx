var CuisineCategoryRow = React.createClass({
  render: function() {
    return(
      <tr>
        <th colspan='2'>{this.props.cuisine.name}</th>
      </tr>
    );
  }
});
