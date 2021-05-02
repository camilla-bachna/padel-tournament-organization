/* import { Route, Switch } from 'react-router-dom'; */
import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import Player from './palyer/Player';
import localStorage from '../services/localStorage';

function App() {
  //state

  const localStoragePlayer = localStorage.get('player');
  const [player, setPlayer] = useState('');
  const [playerId, setPlayerId] = useState(localStoragePlayer.playerId || '');
  const [gender, setGender] = useState('choose');
  const [loginError, setLoginError] = useState({});

  //events: player

  const handlePlayer = (event) => {
    setPlayer(event.target.value);
  };

  const handleLogin = () => {
    const fakeServerData = {
      playerId: '12',
    };
    setPlayerId(fakeServerData.playerId);
    localStorage.set('player', fakeServerData);
  };
  const handleLogout = () => {
    localStorage.remove('player');
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
        <Player
          isPlayerLoggedIn={!!playerId}
          loginError={loginError}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          handleSelect={handleSelect}
          handlePlayer={handlePlayer}
          gender={gender}
          player={player}
        />
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
