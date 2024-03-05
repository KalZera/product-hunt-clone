import { CategoryDTO } from '../api/Category';

export const GET_CATEGORY = 'GET_CATEGORY';
export async function getCategory(): Promise<CategoryDTO[] | undefined> {
  //TODO create a real endpoint
  // const response = await fetch('/GetCategory.msw.ts');
  // const category = await response.json();
  return Categories || [];
}
//just for mock
export const Categories: CategoryDTO[] = [
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
