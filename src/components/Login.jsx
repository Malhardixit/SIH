import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import axios from "../axios";

const Login = ({ setOperator }) => {
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
    if (loginCredentials.username !== "" && loginCredentials.password !== "") {
      axios.post("/operatorCredentials", loginCredentials).then((res) => {
        if (res.data.Message !== "User Authenticated") {
          alert("Invalid Credentials");
        }
        setOperator(res.data);
      });
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
        {/* <Link to="operator">
          <Button>Login</Button>
        </Link> */}
      </div>
    </LoginFrom>
  );
};

const LoginFrom = styled.form`
  border-radius: 4px;
  padding: 3% 5%;
  width: 75%;
  margin: 30px auto 0;
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
  outline: none;
  background-color: #ffffff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1976d2;
    border: 2px solid #1976d2;
    color: #ffffff;
  }
`;

export default Login;
