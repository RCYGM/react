class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Cambia el código debajo de esta línea
    console.log("Hola! componentWillMount")
    // Cambia el código encima de esta línea
  }
  render() {
    return <div />
  }
};

/*Los componentes React tienen varios métodos especiales que proporcionan oportunidades para realizar acciones en puntos específicos en el ciclo de vida de un componente. Estos se llaman métodos de ciclo de vida, o interceptores (hooks) de ciclo de vida, y te permiten interceptar componentes en determinados momentos del tiempo. Esto puede ser antes de que se rendericen, antes de que se actualicen, antes de que reciban las props, antes de que se desmonten, etc. Aquí hay una lista de algunos de los métodos principales del ciclo de vida: componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount(). Las siguientes lecciones cubrirán algunos de los casos de uso básicos para estos métodos del ciclo de vida.

Nota: El método de ciclo de vida componentWillMount se desaprobará en una versión futura de 16.X y se eliminará en la versión 17.  */