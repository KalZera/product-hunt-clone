import { Category } from './Category';

export interface Product {
  id: string;
  title: string;
  description: string;
  url: string;
  upvotes: number;
  categories: Pick<Category, 'id'>[];
  createdAt: Date;
  updatedAt: Date;
}
