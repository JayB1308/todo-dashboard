import styled, { keyframes } from "styled-components";

export const formAnimation = keyframes`
0% {opacity: 0;  transform: translateY(-10%)}
100% {opacity: 1;  transform: translateY(0%)}
`;

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.25rem;
  margin-top: 2rem;
  animation: ${formAnimation} 0.5s ease-in-out;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  height: 1.25rem;
  padding: 0.75rem 1.2rem;
  border: 1px solid #cbdbea;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  color: #b7c0c9;
`;

export const FormControl = styled.input`
  border: none;
  outline: none;
  & :focus {
    outline: none;
    border: none;
  }
  & ::placeholder {
    color: #b7c0c9;
  }
`;

export const SubForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: -2rem;
`;

export const RememberMe = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 0.65rem;
  color: #1a3b589c;
`;
