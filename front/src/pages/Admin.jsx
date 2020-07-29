import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FormProject from '../components/FormProject';
import LoginPage from './LoginPage';

const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Admin = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.loggedIn);

  return (
    <DashboardWrapper>
      {isLoggedIn ? (
        <>
          <FormProject />
        </>
      ) : (
        <LoginPage />
      )}
    </DashboardWrapper>
  );
};
export default Admin;
