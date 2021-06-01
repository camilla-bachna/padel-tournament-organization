import React from 'react';
import { Link } from 'react-router-dom';
import FormCourts from './FormCourts';

class NewTournament extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    <>{this.state.counter}</>;

    return (
      <div className="newTournament">
        <h1 className="newTournament__heading">Hola</h1>
        <p className="newTournament__paragraphPushButton">
          Por favor, pulse el botón para crear un nuevo pin del pozo
        </p>
        <button className="newTournament__button" onClick={this.handleButton}>
          Nuevo pozo
        </button>
        <p className="newTournament__paragraphPin">El pin del pozo es: *</p>
        <small className="newTournament__comment">
          * Por favor, comparte este pin con los otros jugadores
        </small>
        <div className="newTournament__container">{this.state.counter}</div>
        <p className="newTournament__paragraphCourts">
          Por favor añada las pistas reservadas: *
        </p>
        <FormCourts />
        <Link to="/" className="link">
          <h4 className="newTournament__link">Volver a la página principal</h4>
        </Link>
      </div>
    );
  }
}

export default NewTournament;
