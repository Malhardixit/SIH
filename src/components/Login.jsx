import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginMaster>
      <h1 style={{ "text-align": "center", "margin-bottom": "30px" }}>
        Registrar Login
      </h1>
      <InputField placeholder="Enter username" />
      <br />
      <InputField placeholder="Enter password" />
      <br />
      <div
        style={{
          width: "fit-content",
          margin: "auto",
        }}
      >
        <Button>Login</Button>
      </div>
    </LoginMaster>
  );
};

const LoginMaster = styled.div`
  border: 2px solid red;
  border-radius: 4px;
  padding: 3% 5%;
  width: 75%;
  margin: 0px auto;
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
