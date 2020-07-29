import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { backend } from '../conf';
import globalTheme from '../theme/Theme';

const OneProjectPageContainer = styled.div`
  margin: 10px auto;
  display: flex;
  width: 100%;
  height: 100%;
`;

const OneProjectPage = () => {
  const dispatch = useDispatch();
  const oneProject = useSelector((state) => state.projectsReducer.oneProject);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${backend}/projects/${id}`).then(({ data }) => {
      dispatch({
        type: 'GET_ONE_PROJECT',
        data,
      });
    });
  }, [dispatch, id]);

  return (
    <OneProjectPageContainer>
      <h3>{oneProject.project_title}</h3>
      <article>Description : {oneProject.projectDescription}</article>
      <p>Client : {oneProject.client_name}</p>
      <img
        src={oneProject.project_img || globalTheme.pictures.defaultimg}
        alt={oneProject.project_title}
      />
    </OneProjectPageContainer>
  );
};

export default OneProjectPage;
