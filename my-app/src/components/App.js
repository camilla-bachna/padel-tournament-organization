/* import { Route, Switch } from 'react-router-dom'; */
import '../stylesheets/App.scss';

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__heading">Bienvenido al paraíso del pádel</h1>
      </header>
      <main className="main">
        <div className="main__image"></div>
        <form className="main__form">
          <label htmlFor="user" className="main__form--label">
            Usario
          </label>
          <input
            type="text"
            id="user"
            className="main__form--input"
            placeholder="elige cualquier nombre de usuario"
          />
          <label htmlFor="match" className="main__form--label">
            Pin
          </label>
          <input
            type="text"
            id="match"
            className="main__form--input"
            placeholder="añade el pin del Juego"
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
      </main>
      <footer className="footer">
        <small className="footer__note">
          Esta aplicación está diseñada para ayudarte a encontrar el cortejo
          adecuado. Sólo tienes que elegir tu nombre de usuario, añadir el pin
          del partido y elegir el género. Ya estaría :)
        </small>
      </footer>
    </>
  );
}

export default App;
