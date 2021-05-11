import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import localStorage from '../services/localStorage';
import Player from './palyer/Player';
import NewTournament from './tournament/New';
import api from '../services/api';

function App() {
  //state

  const localStoragePlayer = localStorage.get('player');
  const [player, setPlayer] = useState('');
  const [pin, setPin] = useState('');
  const [playerId, setPlayerId] = useState(localStoragePlayer.playerId || '');
  const [gender, setGender] = useState('choose');
  const [loginError, setLoginError] = useState({});
  //const [userList, setUserList] = useState([]);

  //effects
  /*  useEffect(() => {
    api.getUsers().then((data) => {
      setUserList(data);
    });
  }, []); */

  //events: player

  const handlePlayer = (event) => {
    setPlayer(event.target.value);
  };

  const handlePin = (event) => {
    setPin(event.target.value);
  };

  const handleLogin = (userData) => {
    console.log(userData);
    api.sendLogin(userData).then((data) => {
      if (data.error === false) {
        setPlayerId(data.playerId);
        localStorage.set('player', data);
      } else {
        setLoginError(data);
      }
    });
  };

  const handleLogout = () => {
    localStorage.remove('player'); //delete data from local storage
    window.location.reload(); //method to refresh a page
  };

  //select gender

  const handleSelect = (inputKey, inputValue) => {
    if (inputKey === 'gender') {
      setGender(inputValue);
    }
  };

  //render

  return (
    <>
      <header className="header">
        <h1 className="header__heading">Bienvenido al paraíso del pádel</h1>
      </header>
      <main className="main">
        <div className="main__image"></div>
        <Switch>
          <Route path="/newTournament">
            <NewTournament />
          </Route>
          <Route exact path="/">
            <Player
              isPlayerLoggedIn={!!playerId} //if string: empty, its falsy => player not logged in, if not empty, its truthy => player logged in:
              //isPlayerLoggedIn={playerId !== ''}
              loginError={loginError}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              handleSelect={handleSelect}
              handlePlayer={handlePlayer}
              handlePin={handlePin}
              gender={gender}
              player={player}
              pin={pin}
            />
          </Route>
        </Switch>
      </main>
      <footer className="footer">
        <small className="footer__note">
          Esta aplicación está diseñada para ayudarte a encontrar la pista
          correcta. Sólo tienes que elegir tu nombre de usuario, añadir el pin
          del pozo y elegir el género. Ya estaría :)
        </small>
      </footer>
    </>
  );
}

export default App;
