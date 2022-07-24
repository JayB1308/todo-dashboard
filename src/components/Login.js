import React, { useState } from "react";
import {
  AuthIcon,
  LoginHeader,
  LoginWrapper,
  SubmitButton,
} from "../styles/Auth.style";
import {
  Form,
  FormControl,
  FormGroup,
  RememberMe,
  SubForm,
} from "../styles/General";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <LoginWrapper>
      <LoginHeader>
        <h2>To Continue</h2>
        <p>We need your Name & Email</p>
      </LoginHeader>
      <Form>
        <FormGroup>
          <FormControl placeholder="Email" type="text" />
        </FormGroup>
        <FormGroup>
          <FormControl
            placeholder="Password"
            type={show ? "password" : "text"}
          />
          <AuthIcon
            onClick={() => {
              setShow(!show);
            }}
            icon={
              show ? "ant-design:eye-invisible-filled" : "ant-design:eye-filled"
            }
            width={20}
          />
        </FormGroup>
        <SubmitButton>Log In</SubmitButton>
        <SubForm>
          <RememberMe>
            <input type="checkbox" />
            <p>Remember Me</p>
          </RememberMe>
        </SubForm>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
