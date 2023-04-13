import "../header.css";
const Header = (props) => {
  const { handleHideChange, disabledBut } = props;
  return (
    <div className="header">
      <button> New User </button>
      <label htmlFor="Hide">
        <input
          id="Hide"
          value={disabledBut.Hide}
          type="checkbox"
          onChange={handleHideChange}
        />
        Hide Disabled User
      </label>
    </div>
  );
};
export default Header;
