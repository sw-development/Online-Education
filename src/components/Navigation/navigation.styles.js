import styled from "styled-components";
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  width: 85%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 15px 5px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  @media (max-width: 1000px) {
    transform: translateX(100%);
    height: 100vh;
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
  margin: 0 10px;
  @media (max-width: 1000px) {
    margin: 10px 0;
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
  padding: 5px 10px;
  cursor: pointer;
  outline: none; ;
`;
