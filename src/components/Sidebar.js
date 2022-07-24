import React from "react";
import logo from "../assets/images/taskez.png";
import {
  SidebarContainer,
  LogoContainer,
  TopSideBar,
  BottomSideBar,
} from "../styles/Sidebar.style";
import { SidebarTab } from "./SidebarTab";
const Sidebar = () => {
  const topOptions = [
    {
      id: 1,
      icon: "bytesize:home",
      name: "Overview",
    },
    {
      id: 2,
      icon: "arcticons:spotistats",
      name: "Stats",
    },
    {
      id: 3,
      icon: "ant-design:folder-open-outlined",
      name: "Projects",
    },
    {
      id: 4,
      icon: "akar-icons:chat-dots",
      name: "Chat",
    },
    {
      id: 5,
      icon: "bi:calendar-date",
      name: "Calendar",
    },
  ];

  const bottomOptions = [
    {
      id: 6,
      icon: "carbon:settings",
      name: "Settings",
    },
    {
      id: 7,
      icon: "material-symbols:logout-rounded",
      name: "Logout",
    },
  ];

  return (
    <SidebarContainer>
      <TopSideBar>
        <LogoContainer>
          <img src={logo} alt="logo" />
        </LogoContainer>
        {topOptions.map((option) => {
          return (
            <SidebarTab key={option.id} icon={option.icon} name={option.name} />
          );
        })}
      </TopSideBar>
      <BottomSideBar>
        {bottomOptions.map((option) => {
          return (
            <SidebarTab key={option.id} icon={option.icon} name={option.name} />
          );
        })}
      </BottomSideBar>
    </SidebarContainer>
  );
};

export default Sidebar;
