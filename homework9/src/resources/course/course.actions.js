import * as api from "./course.api";

import CourseActionTypes from "./course.constants";

export const getCoursesAction = () => async (dispatch) => {
  try {
    const result = await api.getCoursesApi();

    dispatch({
      type: CourseActionTypes.GET_COURSES,
      payload: result instanceof Array ? result : [],
    });

    return { type: "success", data: result };
  } catch (error) {
    console.error("API Error", error);
    dispatch({
      type: CourseActionTypes.GET_COURSES,
      payload: "No course found",
    });
    return { type: "error", data: error };
  }
};

export const applyCoursesAction = (data) => async (dispatch) => {
  try {
    const result = await api.coursesApplyApi(data);
    return { type: "success", data: result };
  } catch (error) {
    console.error("API Error", error);
    dispatch({
      type: CourseActionTypes.GET_COURSES,
      payload: [],
    });
    return { type: "error", data: error };
  }
};

export const subscribeAction = (data) => async (dispatch) => {
  try {
    const result = await api.subscribeApi(data);
    return { type: "success", data: result };
  } catch (error) {
    console.error("API Error", error);
    return { type: "error", data: error };
  }
};
