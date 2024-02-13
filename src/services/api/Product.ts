export interface Product {
  id: string;
  title: string;
  description: string;
  url: string;
  upvotes: number;
  categories: string[];
  createdAt: Date;
  updatedAt: Date;
}
