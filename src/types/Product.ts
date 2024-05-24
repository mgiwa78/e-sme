import { TCategory } from "./Category";

export interface TProduct {
  _id: string;
  name: string;
  owner: string;
  price: number;
  description: string;
  category: TCategory;
  stock: number;
  image: string;
  images: Array<string>;
}
