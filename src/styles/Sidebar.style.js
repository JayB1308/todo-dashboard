import styled from "styled-components";
import { Icon } from "@iconify/react";
export const SidebarContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  border-right: 1.5px solid #f0f0f0;
`;

export const TopSideBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BottomSideBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SideTab = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 20%;
  & p {
    color: #9a9a9a;
  }
`;

export const SideIcon = styled(Icon)`
  color: #9a9a9a;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 5%;
  padding: 2rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & img {
    width: 30%;
    margin-left: 20%;
  }
`;
