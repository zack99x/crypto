export interface User extends Record<string, unknown> {
  id?: string;
  username: string;
  email: string;
}