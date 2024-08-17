export interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
}

export interface IPost {
  id: number;
  _id: string;
  title: string;
  body: string;
  userId?: number;
}
