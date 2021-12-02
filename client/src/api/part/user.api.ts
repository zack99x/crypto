import { AxiosInstance, AxiosResponse } from "axios";
import { User } from "@/types/global";

export default class UserApi {
  instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async currentUser(): Promise<User> {
    return this.instance
      .get("/xxx/xxx", {})
      .then((res: AxiosResponse<{ data: User }>) => res.data.data);
  }

  async updateUser(
    username: string,
    email: string,
    password?: string
  ): Promise<User> {
    return this.instance
      .put("/xxx/xxx", { user: { username, password, email } })
      .then((res: AxiosResponse<{ data: User }>) => res.data.data);
  }

  async deleteUser(): Promise<unknown> {
    return this.instance
      .delete("/xxx/xxx")
      .then((res: AxiosResponse<any>) => res.data);
  }
}
