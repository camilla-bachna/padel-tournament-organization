/* import { Route, Switch } from 'react-router-dom'; */
import '../stylesheets/App.scss';

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__heading">Welcome to the Padel paradise</h1>
      </header>
      <main className="main">
        <div className="main__image"></div>
        <form className="main__form">
          <label htmlFor="user" className="main__form--label">
            User
          </label>
          <input
            type="text"
            id="user"
            className="main__form--input"
            placeholder="add username"
          />
          <label htmlFor="match" className="main__form--label">
            Pin
          </label>
          <input
            type="text"
            id="match"
            className="main__form--input"
            placeholder="add the game pin"
          />
          <label htmlFor="gender" className="main__form--label">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            value="gender"
            className="main__form--select"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button type="submit" className="main__form--button">
            Go
          </button>
        </form>
      </main>
      <footer className="footer">
        <small className="footer__note">
          This app is designed to help you find the right court. Just choose
          your username, add the pin of the match and choose the gender. That's
          it :)
        </small>
      </footer>
    </>
  );
}

export default App;
