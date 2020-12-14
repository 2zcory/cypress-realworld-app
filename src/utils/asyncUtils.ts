import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const httpClient = axios.create({
  withCredentials: true,
});

httpClient.interceptors.request.use((config) => {
  /* istanbul ignore next */
  if (process.env.REACT_APP_OKTA) {
    const accessToken = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_NAME!);
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

export { httpClient };
