const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Cambia el código debajo de esta línea
Items.propTypes = {quantity: PropTypes.number.isRequired}
// Cambia el código encima de esta línea

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};