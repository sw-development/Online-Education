import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 99;
  width: 100%;
  left: 50%;
  right: 50%;
  height: 100vh;
  transform: translateX(100%);
  box-shadow: 0px 3px 11px -9px rgba(0, 0, 0, 0.75);
  transition: transform 0.3s 0.1s ease-in-out;

  ${({ theme }) => theme.mq.md} {
    transform: translateX(-50%);
    height: fit-content;
  }
  &.active {
    transform: translateX(-50%) !important;
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
  flex-wrap: wrap;
  div,
  ul,
  li {
    width: 100%;
    text-align: center;
  }
  @media (min-width: 1000px) {
    flex-wrap: nowrap;
    div,
    ul,
    li {
      width: fit-content;
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
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin: 10px 0;
  ${({ theme }) => theme.mq.md} {
    margin: 0 10px;
  }
`;
export const NavActions = styled.div`
  display: flex;
  justify-content: center;
`;
export const PrimaryBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.royalBlue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 7px;
  padding: 10px 20px;
  margin-left: 5px;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  font-size: ${({ theme }) => theme.font.size.xxs};
  transition: 0.3s all linear;
  &:active,
  &:hover {
    border: 1px solid #2575e6;
    color: #2575e6;
    background-color: #fff;
  }
`;
export const SecondaryBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border: 1px solid transparent;
  border-radius: 7px;
  padding: 10px 20px;
  margin-right: 5px;
  cursor: pointer;
  outline: none;
  font-size: ${({ theme }) => theme.font.size.xxs};
  transition: 0.3s all linear;
  &:hover,
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
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
  ${({ theme }) => theme.mq.md} {
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
  background-color: ${({ theme }) => theme.colors.black};
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
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
  }
  &:after {
    content: "";
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
  }

  &:before {
    top: -10px;
  }
  &:after {
    top: 10px;
  }
  &.hamburger--active {
    background-color: transparent;
    &:after {
      transform: translateY(-10px) rotate(-45deg);
    }
    &:before {
      transform: translateY(10px) rotate(45deg);
    }
  }
`;
