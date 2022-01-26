import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { LogOutContext } from "../../app/context/app.context";

export const NavBar = () => {
  const [token, setToken] = useState("");
  const { logOut, isLoggedIn } = useContext(LogOutContext);

  const onHandleClick = (e) => {
    const items = Array.from(e.parentElement.children);
    items.map((item) => {
      return item.classList.remove("active");
    });
    e.classList.add("active");
  };

  const onClickLogout = () => {
    let data = "";
    let config = {
      method: "post",
      headers: {
        Authorization: `Barear ${token}`,
      },
      data: data,
    };
    axios("/user/logout", config)
      .then(({ data }) => {
        logOut(true);
        console.log(isLoggedIn);
        localStorage.removeItem("token");
      })
      .catch((error) => {
        localStorage.removeItem("token");
        logOut(true);
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    let localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);

  return (
    <>
      <div className="ui secondary  menu">
        <Link
          onClick={(e) => onHandleClick(e.target)}
          name="create"
          className="item"
          to="/"
        >
          Home
        </Link>
        <div className="right menu">
          {!isLoggedIn && (
            <Link
              onClick={(e) => onHandleClick(e.target)}
              name="search"
              className="item"
              to="/login"
            >
              Login
            </Link>
          )}

          {isLoggedIn && (
            <Link
              onClick={() => onClickLogout()}
              name="search"
              className="item"
              to="/login"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
