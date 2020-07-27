import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { backend } from '../conf';

const FormContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 30vh;
  margin-bottom: 40px;
  display: block;
  padding-bottom: 10px;

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

const FormProject = () => {
  const [project, setProject] = useState({});
  const authData = useSelector((state) => state.userReducer.authData);

  const ProjectChange = (e) => {
    const tmp = {
      ...project,
      [e.target.name]: e.target.value,
    };
    setProject(tmp);
  };

  //   const error = () => toast.error('Oups il y a une erreur');
  //   const notify = () => toast.success('Un nouveau projet a bien été posté !');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${backend}/projects`, project, {
        headers: {
          Authorization: `Bearer ${authData.token || null}`,
        },
      })
      .then('Un nouveau projet a bien été posté !')
      .catch('Oups il y a une erreur');
    e.target.reset();
    setProject({});
  };

  return (
    <FormContainer>
      <div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            name="project_title"
            required
            onChange={(e) => {
              ProjectChange(e);
            }}
            placeholder="Titre"
          />
          <input
            type="text"
            name="project_description"
            required
            onChange={(e) => {
              ProjectChange(e);
            }}
            placeholder="Description du projet"
          />
          <input
            type="text"
            name="project_link"
            onChange={(e) => {
              ProjectChange(e);
            }}
            placeholder="Url du projet"
          />
          <input
            type="number"
            name="technologie_id"
            onChange={(e) => {
              ProjectChange(e);
            }}
            placeholder="id tech"
          />
          <input
            type="number"
            name="client_id"
            onChange={(e) => {
              ProjectChange(e);
            }}
            placeholder="id client"
          />

          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </FormContainer>
  );
};
export default FormProject;
