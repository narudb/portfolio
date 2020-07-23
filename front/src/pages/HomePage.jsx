import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-column-gap: 35px;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: 1fr 1fr 5px 1fr 1fr; */
  grid-template-areas: 'textbloc imgbloc';
  align-items: center;
  margin: 0 auto;
`;

const LeftBloc = styled.div`
  width: 100%;
  height: auto;
  grid-area: textbloc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PName = styled.p`
  font-size: 4em;
  font-weight: bold;
`;

const PDev = styled.p`
  font-size: 2.8em;
  font-style: italic;
`;

const BlocLogo = styled.div`
  height: auto;
`;

const Logo = styled.img`
  margin: 20px;
`;

const RightBloc = styled.div`
  width: 100%;
  height: auto;
  grid-area: imgbloc;
`;

const Pic = styled.img`
  width: 25vw;
  justify-items: center;
`;

const HomePage = () => {
  return (
    <HomeWrapper>
      <LeftBloc>
        <PName>Benjamin Durand</PName>
        <PDev>Développeur Web Junior</PDev>
        <BlocLogo>
          <Logo src="/img/github.png" alt="github" />
          <Logo src="/img/linkedin.png" alt="linkedin" />
        </BlocLogo>
      </LeftBloc>
      <RightBloc>
        <Pic src="/img/photo.png" alt="picture" />
      </RightBloc>
    </HomeWrapper>
  );
};

export default HomePage;
