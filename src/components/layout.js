import "../layout.css";

const Layout = (props) => {
  const { list } = props;
  return (
    <div>
      <table>
        <thead className="upperRow">
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Enabled</th>
          </tr>
        </thead>
        <tbody>
          {list.map((x, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{x.UserName}</td>
                <td>{x.Email}</td>
                <td>{x.Enabled.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Layout;
