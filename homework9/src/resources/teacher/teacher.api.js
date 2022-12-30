import { apiClient } from "../../helpers/api";
import config from "../config";

// Get Teachers
export const getTeachersApi = () => apiClient.get(config.teacherServiceUrl);
