import React from "react";

function Login(props) {
  return (
    <div className="login-form">
      <form onSubmit={props.onSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          onChange={props.handleEmail}
        />
        <label htmlFor="passowrd">Passowrd:</label>
        <input
          type="password"
          placeholder="Passowrd"
          name="passowrd"
          id="passowrd"
          onChange={props.handlePassword}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
