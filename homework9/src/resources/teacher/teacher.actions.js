import * as api from "./teacher.api";

import TeacherActionTypes from "./teacher.constants";

export const getTeachersAction = () => async (dispatch) => {
  try {
    const result = await api.getTeachersApi();
    dispatch({
      type: TeacherActionTypes.GET_TEACHERS,
      payload: result instanceof Array ? result : [],
    });

    return { type: "success", data: result };
  } catch (error) {
    console.error("API Error", error);
    dispatch({
      type: TeacherActionTypes.GET_TEACHERS,
      payload: [],
    });
    return { type: "error", data: error };
  }
};
