import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 99;
  width: 100%;
  left: 50%;
  right: 50%;
  height: 100vh;
  transform: translateX(100%);

  -webkit-box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 11px -9px rgba(0, 0, 0, 0.75);
  transition: transform 0.3s 0.1s ease-in-out;

  @media (min-width: 1000px) {
    transform: translateX(-50%);
    height: fit-content;
  }
`;
export const Nav = styled.nav`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  z-index: 99;
  height: 100%;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    div,
    ul,
    li {
      width: 100%;
      text-align: center;
    }
  }
`;

export const NavLogo = styled.div`
  display: block;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  flex-wrap: wrap;
`;
export const NavListItem = styled.li`
  font-weight: 500;
  margin: 10px 0;
  @media (min-width: 1000px) {
    margin: 0 10px;
  }
`;
export const NavActions = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
export const PrimaryBtn = styled.button`
  background-color: #2575e6;
  color: white;
  border: none;
  border-radius: 7px;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  font-size: 1.2em;
  font-size: ${({ theme }) => theme.font.size.xxs};
`;
export const SecondaryBtn = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  font-size: ${({ theme }) => theme.font.size.xxs};
`;

export const Hamburger = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  z-index: 100;
  border: 0;
  margin: 0;
  transition: transform 0.3s 0.1s ease-in-out;
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const HamburgerBox = styled.span`
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

export const HamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: black;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;
  &:before {
    content: "";
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
    width: 100%;
    height: 3px;
    background-color: black;
    position: absolute;
  }
  &:after {
    content: "";
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
    width: 100%;
    height: 3px;
    background-color: black;
    position: absolute;
  }

  &:before {
    top: -10px;
  }
  &:after {
    top: 10px;
  }
`;
