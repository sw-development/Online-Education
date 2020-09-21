import React from "react";
import {
  Nav,
  NavLogo,
  NavList,
  NavListItem,
  SecondaryBtn,
  PrimaryBtn,
  NavActions,
} from "./navigation.styles";
import Logo from "../../assets/images/logo.png";

function Navigation() {
  return (
    <Nav>
      <NavLogo>
        <img src={Logo} alt='logo' />
      </NavLogo>
      <NavList>
        <NavListItem>
          <a href='#'>Home</a>
        </NavListItem>
        <NavListItem>
          <a href='#'>About</a>
        </NavListItem>
        <NavListItem>
          <a href='#'>Courses</a>
        </NavListItem>
        <NavListItem>
          <a href='#'>Blog</a>
        </NavListItem>
        <NavListItem>
          <a href='#'>Contact</a>
        </NavListItem>
      </NavList>
      <NavActions>
        <SecondaryBtn>Log in</SecondaryBtn>
        <PrimaryBtn>Sign Up</PrimaryBtn>
      </NavActions>
    </Nav>
  );
}

export default Navigation;
