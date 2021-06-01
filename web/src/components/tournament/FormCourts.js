function FormCourts() {
  //preventDefault for form

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <form className="form__courts" onSubmit={handleSubmit}>
        <label htmlFor="courts" className="form__courts--label"></label>
        <input
          type="text"
          id="courts"
          className="form__courts--input"
          pattern="^[0-9]{1,500}$"
          title="Sólo puede contener números"
          required
        />
        <input
          type="text"
          id="courts"
          className="form__courts--input"
          pattern="^[0-9]{1,500}$"
          title="Sólo puede contener números"
          required
        />
        <input
          type="text"
          id="courts"
          className="form__courts--input"
          pattern="^[0-9]{1,500}$"
          title="Sólo puede contener números"
          required
        />
        <input
          type="text"
          id="courts"
          className="form__courts--input"
          pattern="^[0-9]{1,500}$"
          title="Sólo puede contener números"
          required
        />
        <input
          type="text"
          id="courts"
          className="form__courts--input"
          pattern="^[0-9]{1,500}$"
          title="Sólo puede contener números"
          required
        />
        <input
          type="text"
          id="courts"
          className="form__courts--input"
          pattern="^[0-9]{1,500}$"
          title="Sólo puede contener números"
          required
        />
      </form>
    </>
  );
}
export default FormCourts;
