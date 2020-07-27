import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const StyledContainer = styled.div`
  height: 45vh;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const CreateProject = () => {
    const [open, setOpen] = useState(false);
    const isLoggedIn = useSelector((state) => state.userReducer.loggedIn);
  
    const handleClick = () => {
      setOpen(!open);
    };

    return (
        <StyledContainer>
          <div>
            <h2>Ajouter un projet</h2>
            {isLoggedIn ? (
              <button type="submit" value="open" onClick={handleClick}>
                +
              </button>
            ) : null}
          </div>
          {open ? <FormProject /> : 'test' }
        </StyledContainer>
      );
    };
};

export default CreateProject;
