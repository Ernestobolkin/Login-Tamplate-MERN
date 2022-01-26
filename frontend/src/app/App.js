import { Login } from "../components/login";
import { useEffect, useState } from "react";
import { useUserAuth } from "./useInit/init";
import { Logout } from "../components/logout";
// import { BrowserRouter, Route } from "react-router-dom";
import { Register } from "../components/register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedIn = useUserAuth();
  console.log(loggedIn);
  useEffect(() => {
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, [loggedIn]);
  return (
    <>
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <Logout setIsLoggedIn={setIsLoggedIn} />}
      {!isLoggedIn && <Register />}
    </>
  );
}

export default App;
