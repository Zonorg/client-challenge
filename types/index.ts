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

export interface FilterInputProps {
  data: any[];
  filterKeys: string[]; // Array de claves para filtrar (ejemplo: ['title', 'body'])
  onFilter: (filteredData: any[]) => void;
  placeholder?: string;
}
