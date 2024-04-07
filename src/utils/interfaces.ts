export interface ChildrenProps {
  children: React.ReactNode;
}

export type RequestMethod = "GET" | "PUT" | "PATCH" | "POST" | "DELETE";

export type apiFetchOptions = {
  page: number;
  limit: number;
};

export type Articles = {
  id: number;
  createdAt: string;
  name: string;
  avatar: string;
  productPrice: string;
  description: string;
  productName: string;
};
