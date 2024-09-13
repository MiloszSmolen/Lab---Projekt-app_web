import React, { useState } from "react";
import { ProjectDashboard } from "./view/ProjectDashboard";
import "./styles/Style.css";
import UserService from "./services/UserService";
import { Login } from "./view/Login";
import { Register } from "./view/Register";

type NotLoggedScreen = "login" | "register";

const App: React.FC = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(
    UserService.isUserLoggedIn()
  );
  const [notLoggedScreen, setNotLoggedScreen] =
    useState<NotLoggedScreen>("register");

  const changePage = () => {
    setNotLoggedScreen(notLoggedScreen === "login" ? "register" : "login");
  };

  const handleLogin = () => {
    setIsUserLoggedIn(UserService.isUserLoggedIn());
  };

  if (!isUserLoggedIn) {
    if (notLoggedScreen === "login") {
      return <Login changePage={changePage} onLogin={handleLogin} />;
    }
    if (notLoggedScreen === "register") {
      return <Register changePage={changePage} />;
    }
  }
  return (
    <>
      <button
        onClick={() => {
          UserService.logout();
          setIsUserLoggedIn(false);
        }}
      >
        Logout
      </button>
      <ProjectDashboard />
    </>
  );
};

export default App;
