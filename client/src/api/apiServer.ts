import UserApi from "./part/user.api";
import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";
dotenv.config();

export default class ApiServer {
  private _serverInstance: AxiosInstance;

  public users: UserApi;

  constructor(url: string) {
    this._serverInstance = axios.create({
      baseURL: url,
      withCredentials: true,
    });

    this._serverInstance.interceptors.request.use(
      (config: any) => this.authHeaderInterceptor(config),
      (error: any) => Promise.reject(error)
    );

    this.users = new UserApi(this._serverInstance);
  }

  private authHeaderInterceptor(config: any) {
    // add the JWT here
  }
}

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8888"
    : process.env.VUE_APP_API_URL || "/";
const apiServer = new ApiServer(url);
export { apiServer };
