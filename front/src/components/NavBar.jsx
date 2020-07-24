import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.background2};
  height: 10vh;
  grid-area: navbar;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 5;
  top: 0px;
  left: 0px;
  width: 100vw;
  box-shadow: rgb(77, 77, 77) 0px 0px 10px;
  transition: background-color 0.37s ease 0s, box-shadow 0.3s ease 0s;
`;

const Logo = styled.img`
  height: 9vh;
  width: 9vw;
  margin-left: 100px;
`;

const Navbar = () => {
  return (
    <HeaderWrapper>
      <Logo src="/img/logo-01.svg" alt="logo" />
      <NavLink />
    </HeaderWrapper>
  );
};

export default Navbar;
