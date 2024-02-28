import { http, HttpResponse } from 'msw';
import { Category } from '../api/Category';

const CategoryResponseMock: Category[] = [
  {
    id: '1',
    title: 'Saas',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'AI',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    title: 'Marketing',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    title: 'Productivity',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    title: 'Tech',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const listCategoryMsw = http.get(
  `${process.env.VITE_API_URL}/category`,
  () => HttpResponse.json(CategoryResponseMock),
);