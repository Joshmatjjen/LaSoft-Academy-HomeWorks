import axios from "axios";

import ApiError from "./api.error";

// Do not throw errors on 'bad' server response codes
axios.interceptors.response.use(
  async (axiosConfig) => {
    const newAxiosConfig = axiosConfig;
    return newAxiosConfig;
  },
  (error) => error.response || {}
);

const generalError = {
  _global: ["Network error occurred."],
};

const throwApiError = ({ data = {}, status = 500 }) => {
  throw new ApiError(data, status);
};

const httpRequest = (method) => async (serviceUrl, pathUrl, data) => {
  let pathUrlWithSlash = pathUrl;

  if (pathUrlWithSlash && pathUrlWithSlash[0] !== "/") {
    pathUrlWithSlash = `/${pathUrlWithSlash}`;
  }

  const options = {
    headers: {
      "Content-type": "application/json",
    },
    method,
    url: `${serviceUrl}${pathUrl ? pathUrlWithSlash : ""}`,
  };

  if (data) {
    if (data.blob) {
      options.responseType = "blob";
    }

    if (method === "get") {
      options.params = data;
    } else {
      options.data = data;
    }
  }

  const response = await axios(options);

  // Log.info(response)
  if (!response) {
    throwApiError({
      data: { errors: generalError },
      status: 500,
    });
    return null;
  }

  response.data = response.data || {};
  response.status = response.status || 500;

  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  if (response.status === 400) {
    throwApiError(response);
  }

  response.data.errors = response.data.errors || generalError;
  throwApiError(response);
  return null;
};

export const getRequest = httpRequest("get");
export const postRequest = httpRequest("post");

const apiClient = {
  get: getRequest,
  post: postRequest,
};

export default apiClient;
