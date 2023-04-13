import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/layout";
import Form from "./components/form";
import Header from "./components/header";
import * as Yup from "yup";
const formSemasi = Yup.object().shape({
  UserName: Yup.string("Please Use a valid User Name").required(
    "You have to write a Username"
  ),
  Email: Yup.string()
    .email("Please Use a valid Email")
    .required("You have to write a Email"),
  DisplayName: Yup.string(),
  Phone: Yup.string(),
  UserRole: Yup.string(),
  Enabled: Yup.boolean(),
});
function App() {
  const [user, setUser] = useState({
    UserName: "",
    DisplayName: "",
    Phone: "",
    Email: "",
    UserRole: "",
    Enabled: false,
  });
  const [errors, setErrors] = useState({
    UserName: "",
    Email: "",
  });
  const [disabledBut, setDisabledBut] = useState({
    Hide: false,
  });
  const [list, setList] = useState([]);
  function handleChange(event) {
    const { id, value } = event.target;

    let yeniDeger = value;
    if (event.target.type === "checkbox") {
      yeniDeger = event.target.checked;
    }
    checkFormErrors(id, yeniDeger);
    setUser({
      ...user,
      [id]: yeniDeger,
    });
  }
  useEffect(() => {
    formSemasi.isValid(user).then((response) => setSubmitDisable(response));
  }, [user]);
  const [submitDisable, setSubmitDisable] = useState(false);
  function checkFormErrors(name, value) {
    Yup.reach(formSemasi, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  }
  function handleHideChange(event) {
    const { id, value } = event.target;

    let yeniDeger = value;
    if (event.target.type === "checkbox") {
      yeniDeger = event.target.checked;
    }
    setDisabledBut({
      ...disabledBut,
      [id]: yeniDeger,
    });
  }
  function handleSubmit(event) {
    setList([...list, user]);
    event.preventDefault();

    setUser({
      UserName: "",
      DisplayName: "",
      Phone: "",
      Email: "",
      UserRole: "",
      Enabled: false,
    });
  }
  const DisabledList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].Enabled.toString() === "true") {
      DisabledList.push(list[i]);
    }
  }

  return (
    <div>
      <Header handleHideChange={handleHideChange} disabledBut={disabledBut} />
      <div className="App">
        <Layout list={disabledBut.Hide ? DisabledList : list} />
        <Form
          user={user}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          submitDisable={submitDisable}
          errors={errors}
        />
      </div>
    </div>
  );
}

export default App;
