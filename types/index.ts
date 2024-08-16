export interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
}

export interface IPost {
  _id: string;
  id: number;
  userId: number;
  title: string;
  body: string;
}
