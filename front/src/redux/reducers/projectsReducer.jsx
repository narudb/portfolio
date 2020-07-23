const store = {
  projectsData: [],
  oneProject: {},
};

const projectsReducer = (state = store, action) => {
  switch (action.type) {
    case 'GET_ALL_PROJECTS':
      return {
        ...state,
        projectsData: action.data,
      };
    case 'GET_ONE_PROJECT':
      return {
        ...state,
        oneProject: action.data,
      };

    default:
      break;
  }
  return state;
};

export default projectsReducer;
