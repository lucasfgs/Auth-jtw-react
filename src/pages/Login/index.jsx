import React, { useState } from "react";
import axios from "axios";

import LoginForm from "../../components/LoginForm";

function Login() {
  const API_URL = "http://localhost:4000/auth/login";

  const [login, setLogin] = useState([]);

  const handleEmail = e => {
    setLogin({ ...login, email: e.target.value });
  };
  const handlePassword = e => {
    setLogin({ ...login, password: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    let resp = await axios.post(API_URL, {
      email: login.email,
      password: login.password
    });
    if (resp.status === 200) localStorage.setItem("token", resp.data);
    console.log(resp);
  };

  return (
    <div>
      <LoginForm
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Login;
