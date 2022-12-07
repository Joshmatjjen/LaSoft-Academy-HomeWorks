import { apiClient } from "../../helpers/api";
import config from "../config";

// Get Courses
export const getCoursesApi = () => apiClient.get(config.courseServiceUrl);
export const coursesApplyApi = (payload) =>
  apiClient.post(config.formUrl, "/apply", payload);
export const subscribeApi = (payload) =>
  apiClient.post(config.formUrl, "/subscribe", payload);
