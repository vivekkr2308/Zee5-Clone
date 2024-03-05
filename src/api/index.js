import axios from "axios";

const api = axios.create({
  baseURL: "https://academics.newtonschool.co/api/v1/ott",
  headers: {
    projectId: "f104bi07c490",
  },
});

//However, if your user authentication logic is simple and you don't need dynamic handling of authentication tokens, handling authentication directly in a context or a dedicated authentication service may be a valid and straightforward approach.

// the interceptor is used to check for the presence of an authentication token
//automatically attaches an authentication token to outgoing API requests, simplifying authorization management.

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token_zee5");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
