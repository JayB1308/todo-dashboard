import styled from "styled-components";
import { Icon } from "@iconify/react";

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const NavSearch = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  padding: 2rem 2.5rem;
  color: #9a9a9a;
  font-weight: 400;
  font-size: 1.15rem;
  & input {
    margin-bottom: -0.125rem;
    outline: none;
    border: none;
    padding: 0.25rem 0.5rem;
    & :focus {
      outline: none;
      border: none;
    }
  }
`;

export const NavIcon = styled(Icon)`
  color: #9a9a9a;
`;

export const NavAvatarContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavAvatar = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 2.15rem;
  margin-left: -0.85rem;
  & img {
    width: 2rem;
    border-radius: 50%;
  }
`;

export const UserContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  gap: 1.45rem;
  & h4 {
    font-size: 1.15rem;
    font-weight: 400;
    letter-spacing: 0.35rem;
  }
  & img {
    width: 3rem;
  }
`;
