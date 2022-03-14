import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  function updateLoginCredentials(event) {
    const { name, value } = event.target;
    setLoginCredentials({
      ...loginCredentials,
      [name]: value,
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    if (loginCredentials) {
      console.log(loginCredentials);
      // Post request to perform login
    } else {
      alert("Username and password field can't be empty..!!!");
    }
  }

  return (
    <LoginFrom onSubmit={handleLogin}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Registrar Login
      </h1>
      <InputField
        name="username"
        onChange={updateLoginCredentials}
        placeholder="Enter username"
        type="text"
      />
      <br />
      <InputField
        name="password"
        onChange={updateLoginCredentials}
        placeholder="Enter password"
        type="Password"
      />
      <br />
      <div
        style={{
          width: "fit-content",
          margin: "auto",
        }}
      >
        <Button>Login</Button>
      </div>
    </LoginFrom>
  );
};

const LoginFrom = styled.form`
  border-radius: 4px;
  padding: 3% 5%;
  width: 75%;
  margin: 0px auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const InputField = styled.input`
  padding: 3px 10px;
  margin: 5px 0;
  font-size: 18px;
  width: 100%;
  border: 2px solid black;
  outline: none;
  border-radius: 4px;
`;
const Button = styled.button`
  padding: 3px 30px;
  text-transform: uppercase;
  font-size: 18px;
  margin: 15px auto 0;
  width: fit-content;
  border: 2px solid #121212;
  background-color: #ffffff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff5733;
    border: 2px solid #ff5733;
    color: #ffffff;
  }
`;

export default Login;
