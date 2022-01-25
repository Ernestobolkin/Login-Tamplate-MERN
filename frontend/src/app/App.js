import { Login } from "../components/login";
import { useEffect, useState } from "react";
import { useUserAuth } from "./useInit/init";
import { Logout } from "../components/logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log("%c hellow owrld", "font-size:25px; color:red");
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
    </>
  );
}

export default App;
