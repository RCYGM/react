const CurrentDate = (props) => {
  return (
    <div>
      { /* Cambia el código debajo de esta línea */ }
      <p>The current date is: {props.date}</p>
      { /* Cambia el código encima de esta línea */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Cambia el código debajo de esta línea */ }
        <CurrentDate date={Date()}/>
        { /* Cambia el código encima de esta línea */ }
      </div>
    );
  }
};