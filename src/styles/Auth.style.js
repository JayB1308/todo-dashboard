import styled from "styled-components";
import { Icon } from "@iconify/react";
export const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3rem;
  width: 50%;
  & img {
    width: 60%;
  }
`;

export const FormWrapper = styled.div`
  width: 70%;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  border: 2px solid #1a3b583d;
  border-radius: 4rem;
  height: 100%;
`;

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  height: 75%;
`;

export const Tabs = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  margin-left: 7.5%;
  margin-top: 7.5%;
`;

export const TabItem = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  color: ${(props) => (!props.show ? "#1a3b5854" : "#000000")};
  font-size: 1.5rem;
  cursor: pointer;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 12%;
`;

export const LoginHeader = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin-bottom: -1rem;
  & h2 {
    font-size: 1.25rem;
    font-weight: 500;
  }
  & p {
    margin-top: -1.5rem;
    font-size: 0.75rem;
    color: #999999;
  }
`;

export const AuthIcon = styled(Icon)`
  color: #b7c0c9;
`;

export const SubmitButton = styled.button`
  width: 75%;
  background-color: #329c89;
  border-radius: 0.5rem;
  border: none;
  height: 3rem;
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
`;
