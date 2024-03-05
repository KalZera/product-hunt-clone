import { CategoryDTO } from '../api/Category';

export const GET_CATEGORY = 'GET_CATEGORY';
export async function getCategory(): Promise<CategoryDTO[] | undefined> {
  const response = await fetch('https://api.example.com/category');
  const categorys = await response.json();
  return categorys || [];
}
