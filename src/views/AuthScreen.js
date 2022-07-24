import React, { useState } from "react";
import {
  AuthContainer,
  AuthImageWrapper,
  FormContainer,
  FormWrapper,
  TabItem,
  Tabs,
} from "../styles/Auth.style";
import authImage from "../assets/images/Layer 1.png";

import Login from "../components/Login";
import Register from "../components/Register";

const AuthScreen = () => {
  const [register, setRegister] = useState(true);
  const [mode, setMode] = useState("login");

  return (
    <AuthContainer>
      <AuthImageWrapper>
        <img src={authImage} alt="form-side" />
      </AuthImageWrapper>
      <FormContainer>
        <FormWrapper>
          <Tabs>
            <TabItem
              onClick={() => {
                setRegister(false);
                setMode("login");
              }}
              show={mode === "login" ? true : false}
            >
              Login
            </TabItem>
            <TabItem
              onClick={() => {
                setRegister(true);
                setMode("register");
              }}
              show={mode === "register" ? true : false}
            >
              Register
            </TabItem>
          </Tabs>
          {!register ? <Login /> : <Register />}
        </FormWrapper>
      </FormContainer>
    </AuthContainer>
  );
};

export default AuthScreen;
