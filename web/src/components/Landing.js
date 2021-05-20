import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="main__landing--container main__annimation">
      <p className="main__landing--paragraph">
        Por favor elija si deseas crear un nuevo pozo o unirte a uno
      </p>
      <Link to="/newTournament">
        <button className="main__landing--button">Crea un nuevo pozo</button>
      </Link>
      <Link to="/joinTournament">
        <button className="main__landing--button">Únete a un pozo</button>
      </Link>
    </div>
  );
}

export default Landing;
