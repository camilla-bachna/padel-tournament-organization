function Form() {
  return (
    <form className="main__form">
      <button className="main__form--new">Crea un nuevo juego</button>
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
  );
}

export default Form;
