import "../form.css";

const Form = (props) => {
  const { user, handleSubmit, handleChange, submitDisable, errors } = props;
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <h2>New User</h2>
        <p>
          <label htmlFor="UserName">UserName:</label>
          <input
            id="UserName"
            type="text"
            value={user.UserName}
            onChange={handleChange}
          ></input>
        </p>
        {errors.UserName !== "" ? <p>{errors.UserName}</p> : null}
        <p>
          <label htmlFor="DisplayName">Display Name:</label>
          <input
            id="DisplayName"
            type="text"
            value={user.DisplayName}
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label htmlFor="Phone">Phone:</label>
          <input
            id="Phone"
            type="text"
            value={user.Phone}
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label htmlFor="Email">Email:</label>
          <input
            id="Email"
            type="text"
            value={user.Email}
            onChange={handleChange}
          ></input>
        </p>
        {errors.Email !== "" ? <p>{errors.Email}</p> : null}
        <p>
          <label htmlFor="UserRole">UserRole:</label>
          <select id="UserRole" onChange={handleChange}>
            <option value="Guest">Guest</option>
            <option value="Admin">Admin</option>
            <option value="SuperAdmin">SuperAdmin</option>
          </select>
        </p>
        <p>
          <label htmlFor="Enabled">Enabled:</label>
          <input
            value={user.Enabled}
            onChange={handleChange}
            id="Enabled"
            type="checkbox"
            checked={user.Enabled}
          ></input>
        </p>
        <p>
          <button type="submit" disabled={!submitDisable}>
            Save User
          </button>
        </p>
      </form>
    </div>
  );
};
export default Form;
