import TeacherActionTypes from "./teacher.constants";

const INITIAL_STATE = {
  teachers: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TeacherActionTypes.GET_TEACHERS:
      return {
        ...state,
        teachers: action.payload,
      };
    default:
      return state;
  }
};
