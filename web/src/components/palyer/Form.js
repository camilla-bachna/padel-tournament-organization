import { Link } from 'react-router-dom';

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
      pin: props.pin,
    });
  };

  return (
    <>
      <form className="main__form main__annimation" onSubmit={handleSubmit}>
        <label
          htmlFor="player"
          className="main__form--label main__form--labelPlayer"
        >
          Jugador *
        </label>
        <input
          type="text"
          id="player"
          className="main__form--input"
          pattern="^[a-zA-Z0-9]{1,20}$"
          title="Puede contener letras y/o números"
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
          title="Sólo puede contener números"
          placeholder="añade el pin del pozo"
          value={props.pin}
          onChange={props.handlePin}
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
          A jugar
        </button>
        <span className="main__form--errorMessage">
          {props.loginError.message}
        </span>
        {/* message for pin not found */}
        <Link to="/" className="link">
          <h4 className="main__form--link">Volver a la página principal</h4>
        </Link>
      </form>
    </>
  );
}

export default Form;
