import React from "react";
import {
  NavbarContainer,
  NavIcon,
  NavSearch,
  NavAvatarContainer,
  NavAvatar,
  UserContainer,
} from "../styles/Navbar.style.";
import avatar_1 from "../assets/images/Ellipse 31.png";
import avatar_2 from "../assets/images/Ellipse 32.png";
import avatar_3 from "../assets/images/Ellipse 33.png";
import avatar_4 from "../assets/images/Ellipse 34.png";
import avatar_5 from "../assets/images/Ellipse 35.png";
import user from "../assets/images/User.png";

const Navbar = () => {
  const avatars = [avatar_1, avatar_2, avatar_3, avatar_4, avatar_5];

  return (
    <NavbarContainer>
      <NavSearch>
        <NavIcon icon="ep:search" width={16} />
        <input type="text" placeholder="Search" />
      </NavSearch>
      <NavAvatarContainer>
        {avatars.map((avatar) => {
          return (
            <NavAvatar>
              <img src={avatar} alt="avatar" />
            </NavAvatar>
          );
        })}
      </NavAvatarContainer>
      <UserContainer>
        <h4>Hi Saundarya</h4>
        <img src={user} alt="user" />
      </UserContainer>
    </NavbarContainer>
  );
};

export default Navbar;
