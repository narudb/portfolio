import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const HeaderWrapper = styled.header`
  height: 15vh;
  grid-area: navbar;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 13vh;
  width: 13vw;
  margin: 10px 0 0 37px;
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
