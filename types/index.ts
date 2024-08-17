export interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
}

export interface IPost {
  id: string | number; // ID puede ser string o número
  title: string;
  body: string;
  userId?: number;
}
