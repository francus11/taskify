import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import "./styles/global.css";
import "./styles/signup.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/proj");
    }
  }, [isLoggedIn, navigate]);

  const isDataMatch = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    return username === storedEmail && password === storedPassword;
  };

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
    setLoginError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setLoginError(false);
  };

  const handleSubmit = () => {
    if (!isDataMatch()) {
      setLoginError(true);
      return;
    }

    setIsLoggedIn(true);
    console.log("Dane logowania są poprawne!");
  };

  return (
    <Layout>
      <main className="welcome">
        <div className="welcomeText">
          <h2 className="header">Welcome Back</h2>
        </div>
        <input
          type="text"
          placeholder="Username"
          className={classNames("input", { input__error: loginError })}
          value={username}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          className={classNames("input", { input__error: loginError })}
          value={password}
          onChange={handlePasswordChange}
        />

        {loginError && <p className="p__error">Wrong email or password!!!</p>}

        <p className="subtext__forgot">Forgot password?</p>

        <button
          className="button"
          disabled={!username || !password}
          onClick={handleSubmit}
        >
          Log in
        </button>

        <p className="subtext">
          Don't have an account?{" "}
          <Link to="/reg">
            <span className="subtext__span">Sign up</span>
          </Link>
        </p>
      </main>
    </Layout>
  );
};

export default Login;
