/* import { Route, Switch } from 'react-router-dom'; */
import '../stylesheets/App.scss';
import Form from './Form';

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__heading">Bienvenido al paraíso del pádel</h1>
      </header>
      <main className="main">
        <div className="main__image"></div>
        <Form />
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
