import axios from "axios";
import { useState } from "react";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandle = ({ target }) => {
    const { name, value } = target;
    name === "name" && setUser({ ...user, name: value });
    name === "email" && setUser({ ...user, email: value });
    name === "password" && setUser({ ...user, password: value });
  };

  const onClickHandel = async ()=>{
    axios
    .post("/user/add", user)
    .then(({ data }) => {
      console.log("registerd");
      window.localStorage.setItem("token", data.token);
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log("Error");
    });
  }
  return (
    <>
      <div className="multiContainer">
        <h2>Register</h2>
        <div className="ui input">
          <input
            onChange={onChangeHandle}
            name="name"
            value={user.name}
            placeholder="Enter full name"
          ></input>
        </div>
        <div className="ui input">
          <input
            onChange={onChangeHandle}
            name="email"
            value={user.email}
            placeholder="Enter email"
          ></input>
        </div>
        <div className="ui input">
          <input
            onChange={onChangeHandle}
            name="password"
            type="password"
            value={user.password}
            placeholder="Enter password"
          ></input>
        </div>
        <button className="ui primary button" onClick={onClickHandel}>
          Register
        </button>
      </div>
    </>
  );
};
