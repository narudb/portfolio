import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
import Theme from './theme/Theme';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  grid-template-rows: 15vh auto;
  grid-column-gap: 5px;
  grid-template-areas:
    'navbar navbar navbar'
    '. main .';

  background-color: ${(props) => props.theme.colors.bckground};
  font-family: ${(props) => props.theme.fonts.regular};
`;

const Main = styled.main`
  grid-area: main;
`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <HomeWrapper>
        <NavBar />
        <Main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/projects/" component={ProjectsPage} />
            <Route path="/about/" component={AboutPage} />
            <Route path="/contact/" component={ContactPage} />
            <Route path="/login/" component={LoginPage} />
          </Switch>
        </Main>
      </HomeWrapper>
    </ThemeProvider>
  );
};

export default App;
