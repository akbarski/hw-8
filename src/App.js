import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { LoginForm } from "./components/LoginPage/LoginForm";
import { Timer } from "./components/Timer/Timer";
import { Users } from "./components/Users/Users";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isTimerShow, setTimerShow] = useState(false);
  const [isUsersShow, setUsersShow] = useState(false);
  useEffect(() => {
    const res = localStorage.getItem("AUTH");
    const result = localStorage.getItem("USERS");
    setIsLogedIn(!res);
    setUsersShow(!!result);
  }, []);
  const loginHandler = (e) => {
    setIsLogedIn((prev) => !prev);
    localStorage.setItem("AUTH", JSON.stringify(false));
    localStorage.setItem("USERS", JSON.stringify(false));
    setUsersShow(true);
  };

  const logOutHandler = () => {
    localStorage.removeItem("AUTH");
    localStorage.removeItem("USERS");
    setIsLogedIn(true);
    setTimerShow(false);
    setUsersShow(false);
  };

  const timerViewer = () => {
    setTimerShow(true);
    setUsersShow(false);
  };
  const userViewer = () => {
    setUsersShow(true);
    setTimerShow(false);
  };
  return (
    <div>
      <Header
        isLoggedIn={isLogedIn}
        logOut={logOutHandler}
        timerViewer={timerViewer}
        userViewer={userViewer}
      />
      {isLogedIn ? <LoginForm loggedIn={loginHandler} /> : null}
      {isUsersShow && <Users />}
      {isTimerShow && <Timer />}
    </div>
  );
}

export default App;
