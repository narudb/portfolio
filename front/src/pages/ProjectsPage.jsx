import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { backend } from '../conf';

const ProjectsContainer = styled.div`
  margin: 10px auto;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 65%;
  height: 80%;
  justify-content: space-between;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
  }
`;

const ProjectWrapper = styled.div`
  width: 540px;
  height: 200px;
  margin: 10px;
  border-radius: 5px;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.projectCard};
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-template-areas:
    '. title title'
    'img txt txt'
    'img . .'
    'img date date'
    'img . .';
  img {
    width: 90%;
  }
`;

const Title = styled.h4`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.3em;
  grid-area: title;
  text-align: center;
`;

const Description = styled.p`
  grid-area: txt;
`;

const Date = styled.p`
  grid-area: date;
`;

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const projectsData = useSelector(
    (state) => state.projectsReducer.projectsData
  );

  useEffect(() => {
    const getAllProjects = () => {
      axios
        .get(`${backend}/projects`)
        .then((response) => response.data)
        .then((data) => {
          dispatch({
            type: 'GET_ALL_PROJECTS',
            data,
          });
        });
    };
    getAllProjects();
  }, [dispatch]);

  return (
    <ProjectsContainer>
      {projectsData.map((project, index) => {
        return (
          <ProjectWrapper key={index}>
            <img src={project.project_img} alt={project.project_title} />
            <Title>{project.project_title}</Title>
            <Description>{project.projectDescription}</Description>
            <Date>{project.project_date}</Date>
          </ProjectWrapper>
        );
      })}
    </ProjectsContainer>
  );
};

export default ProjectsPage;
