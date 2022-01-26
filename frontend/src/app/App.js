import { Login } from "../components/login/login";
import { useEffect, useState } from "react";
import { useUserAuth } from "./useInit/init";
import { BrowserRouter, Route } from "react-router-dom";
import { Register } from "../components/register/register";
import { HomePage } from "../pages/home/homePage";
import { NavBar } from "../components/navbar/navBar";
import { LogOutContext } from "./context/app.context";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedIn = useUserAuth();
  useEffect(() => {
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, [loggedIn]);

  const logOut = () => setIsLoggedIn(false);

  return (
    <>
      <BrowserRouter>
        <LogOutContext.Provider value={{ logOut, isLoggedIn }}>
          <NavBar />
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
            {!isLoggedIn && <Register />}
          </Route>
        </LogOutContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
