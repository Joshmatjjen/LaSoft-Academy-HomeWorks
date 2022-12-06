import CourseActionTypes from "./course.constants";

const INITIAL_STATE = {
  courses: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CourseActionTypes.GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};
