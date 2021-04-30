import react, { useState } from 'react';

function Form(props) {
  // state

  const [player, setPlayer] = useState('');

  // events

  const handlePlayer = (ev) => {
    setPlayer(ev.target.value);
  };

  //prevent default submit
  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.handleLogin({
      player: player,
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
        placeholder="elige cualquier nombre de usuario"
        value={player}
        onChange={handlePlayer}
        required
      />
      <label htmlFor="match" className="main__form--label">
        Pin *
      </label>
      <input
        type="text"
        id="match"
        className="main__form--input"
        placeholder="añade el pin del pozo"
        required
      />
      <label htmlFor="gender" className="main__form--label">
        Género
      </label>
      <select
        name="gender"
        id="gender"
        value="gender"
        className="main__form--select"
      >
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
