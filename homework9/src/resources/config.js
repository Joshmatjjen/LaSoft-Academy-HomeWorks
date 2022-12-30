const getCoursesUrl = () => process.env.REACT_APP_SERVER_API_URL + "/courses";
const getTeachersUrl = () => process.env.REACT_APP_SERVER_API_URL + "/teachers";
const getFormUrl = () => process.env.REACT_APP_SERVER_API_URL + "/form";

export default {
  courseServiceUrl: getCoursesUrl(),
  teacherServiceUrl: getTeachersUrl(),
  formUrl: getFormUrl(),
};
