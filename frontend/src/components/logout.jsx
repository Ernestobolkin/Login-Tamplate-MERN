import axios from "axios";
import { useState, useEffect } from "react";

export const Logout = ({setIsLoggedIn}) => {
  const [token, setToken] = useState("");
  const onClickLogout = () => {
    let data = "";
    let config = {
      method: "post",
      headers: {
        Authorization: `Barear ${token}`,
      },
      data: data,
    };
    axios("http://localhost:8080/user/logout", config)
      .then(({ data }) => {
        localStorage.removeItem(token)
        setIsLoggedIn(false)
      })
      .catch((error) => {
        console.log(token);
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    let localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);

  return (
    <>
      <button className="ui primary button" onClick={() => onClickLogout()}>
        Logout
      </button>
    </>
  );
};
