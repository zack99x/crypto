import { User } from "@/types/global";
import { Store } from "./main";

class UserStore extends Store<User> {
  protected data(): User {
    return {
      id: "",
      username: "",
      email: "",
    };
  }

  login(user: User) {
    const { id, username, email } = user;

    this.state.id = id;
    this.state.username = username;
    this.state.email = email;
  }

  updateUser(user: User) {
    const { username, email } = user;

    this.state.username = username;
    this.state.email = email;
  }

  logout() {
    this.state.id = "";
    this.state.username = "";
    this.state.email = "";
  }
}

export const userStore: UserStore = new UserStore();
