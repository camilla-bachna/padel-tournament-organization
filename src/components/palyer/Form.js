import react, { useState } from 'react';

function Form(props) {
  // events

  const handleGender = (event) => {
    props.handleSelect(event.target.name, event.target.value);
  };

  //preventDefault for form

  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.handleLogin({
      player: props.player,
    });
  };

  return (
    <form className="main__form" onSubmit={handleSubmit}>
      <button className="main__form--new">Crea un nuevo pozo</button>
      <label htmlFor="player" className="main__form--label">
        Jugador *
      </label>
      <input
        type="text"
        id="player"
        className="main__form--input"
        pattern="^[a-zA-Z0-9]{1,20}$"
        title="May contain letters and/or numbers"
        placeholder="elige cualquier nombre de usuario"
        value={props.player}
        onChange={props.handlePlayer}
        required
      />
      <label htmlFor="match" className="main__form--label">
        Pin *
      </label>
      <input
        type="text"
        id="match"
        className="main__form--input"
        pattern="^[0-9]{1,500}$"
        title="May only contain numbers"
        placeholder="añade el pin del pozo"
        required
      />
      <label htmlFor="gender" className="main__form--label">
        Género
      </label>
      <select
        name="gender"
        id="gender"
        value={props.gender}
        onChange={handleGender}
        className="main__form--select"
      >
        <option value="choose">elige</option>
        <option value="male">Hombre</option>
        <option value="female">Mujer</option>
      </select>
      <button type="submit" className="main__form--button">
        Go
      </button>
    </form>
  );
}

export default Form;
