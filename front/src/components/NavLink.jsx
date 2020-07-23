import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Theme from '../theme/Theme';

const UlStyle = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`;

const LiStyle = styled.li`
  width: 10vw;
  font-weight: bold;
  font-size: 20px;
`;

const LinkNav = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  align-items: center;
  margin: 2px;
  :hover {
    color: ${(props) => props.theme.colors.hover};
    text-decoration: underline;
  }
  :active {
    color: ${(props) => props.theme.colors.active};
    text-decoration: underline;
  }
  :focus {
    text-decoration: underline;
  }
`;

const NavLink = () => {
  return (
    <UlStyle>
      <LiStyle>
        <LinkNav to={`/`}>Accueil</LinkNav>
      </LiStyle>
      <LiStyle>
        <LinkNav to={`/projects/`}>Projets</LinkNav>
      </LiStyle>
      <LiStyle>
        <LinkNav to={`/about/`}>À propos</LinkNav>
      </LiStyle>
      <LiStyle>
        <LinkNav to={`/contact/`}>Contact</LinkNav>
      </LiStyle>
    </UlStyle>
  );
};

export default NavLink;
