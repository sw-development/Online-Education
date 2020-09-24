import React from "react";
import {
  Wrapper,
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
// import "./hamburger.css";
import Container from "../Container/index";

function Navigation() {
  const handleClick = () => {
    const hamburger = document.querySelector(".hamburger__inner");
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
      <Wrapper className='nav'>
        <Container>
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
        </Container>
      </Wrapper>
    </>
  );
}

export default Navigation;
