function NewTournament() {
  return (
    <div className="newTournament">
      <h1 className="newTournament__heading">Hola</h1>
      <p className="newTournament__paragraph">
        Por favor, pulse el botón para crear un nuevo pin del pozo
      </p>
      <button className="newTournament__button">Nuevo pozo</button>
      <p className="newTournament__paragraph">El pin del pozo es: *</p>
      <small className="newTournament__comment">
        * Por favor, comparte este pin con los otros jugadores
      </small>
      <div className="newTournament__container"></div>
    </div>
  );
}

export default NewTournament;
