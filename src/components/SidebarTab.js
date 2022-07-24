import React from "react";
import { SideIcon, SideTab } from "../styles/Sidebar.style";

export const SidebarTab = ({ icon, name }) => {
  return (
    <SideTab>
      <SideIcon icon={icon} width={14} />
      <p>{name}</p>
    </SideTab>
  );
};
