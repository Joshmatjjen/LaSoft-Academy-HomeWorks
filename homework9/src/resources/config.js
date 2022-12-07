const SERVER_API_URL = "http://localhost:2000";

const getCoursesUrl = () => SERVER_API_URL + "/courses";
const getTeachersUrl = () => SERVER_API_URL + "/teachers";
const getFormUrl = () => SERVER_API_URL + "/form";

export default {
  courseServiceUrl: getCoursesUrl(),
  teacherServiceUrl: getTeachersUrl(),
  formUrl: getFormUrl(),
};
