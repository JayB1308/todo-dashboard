import React from "react";
import { useState } from "react";
import { LoginWrapper, AuthIcon, SubmitButton } from "../styles/Auth.style";
import {
  Form,
  FormControl,
  FormGroup,
  SubForm,
  RememberMe,
} from "../styles/General";

const Register = () => {
  const [show, setShow] = useState(false);

  return (
    <LoginWrapper>
      <Form>
        <FormGroup>
          <FormControl type="text" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder="Email" />
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
        <SubmitButton>Sign Up</SubmitButton>
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

export default Register;
