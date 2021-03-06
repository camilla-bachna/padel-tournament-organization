import React from 'react';

const Profile = (props) => {
  // render

  const handleLogout = () => {
    props.handleLogout();
  };

  return (
    <section className="profile">
      <h4 className="profile__heading">Bienvenido {props.player}</h4>
      <p className="profile__paragraph">
        Por favor, selecciona si has ganado o perdido este partido:
      </p>
      <select
        name="result"
        id="result"
        value="result"
        className="profile__select"
      >
        <option value="won">Ganado</option>
        <option value="lost">Perdido</option>
      </select>
      <button className="profile__confirmation">Confirme</button>
      <button className="profile__button" onClick={handleLogout}>
        Cerrar la sesión
      </button>
    </section>
  );
};

export default Profile;
