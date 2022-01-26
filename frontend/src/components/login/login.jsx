import axios from "axios";
import { useState } from "react";

export const Login = ({setIsLoggedIn}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onChangeHandle = ({ target }) => {
    const { name, value } = target;
    name === "email" && setUser({ ...user, email: value });
    name === "password" && setUser({ ...user, password: value });
  };

  const onClickHandel = () => {
    console.log("works");
    axios
      .post("/user/login", user)
      .then(({ data }) => {
        setIsLoggedIn(true)
        tokenToLocalStorage(data[2]);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log("Error");
      });
  };

  const tokenToLocalStorage = (token) => {
    window.localStorage.setItem("token", token);
  };

  return (
    <>
      <div className="multiContainer">
        <h2>Login</h2>
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
          Login
        </button>
      </div>
    </>
  );
};
