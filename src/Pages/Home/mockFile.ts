export interface Product {
  id: string;
  title: string;
  description: string;
  url: string;
  upvotes: number;
  createdAt: Date;
  updatedAt: Date;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'App 1',
    description: 'App 1 description',
    url: 'https://picsum.photos/200/200',
    upvotes: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'App 2',
    description: 'App 2 description',
    url: 'https://picsum.photos/200/200',
    upvotes: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    title: 'App 3',
    description: 'App 3 description',
    url: 'https://picsum.photos/200/200',
    upvotes: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    title: 'App 4',
    description: 'App 4 description',
    url: 'https://picsum.photos/200/200',
    upvotes: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
