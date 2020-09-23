import React from "react";
import {
  Nav,
  NavLogo,
  NavList,
  NavListItem,
  SecondaryBtn,
  PrimaryBtn,
  NavActions,
  Hamburger,
  HamburgerBox,
  HamburgerInner,
} from "./navigation.styles";
import Logo from "../../assets/images/logo.png";
import "./hamburger.css";

function Navigation() {
  const handleClick = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");
    hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("active");

    console.log(hamburger);
  };

  return (
    <>
      <Hamburger className='hamburger' onClick={() => handleClick()}>
        <HamburgerBox className='hamburger__box'>
          <HamburgerInner className='hamburger__inner'></HamburgerInner>
        </HamburgerBox>
      </Hamburger>
      <Nav className='nav'>
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
    </>
  );
}

export default Navigation;
