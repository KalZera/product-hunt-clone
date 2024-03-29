export interface ProductDTO {
  id: string;
  title: string;
  description: string;
  url: string;
  upvotes: number;
  categories: string[];
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}
