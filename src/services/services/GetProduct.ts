import { ProductDTO } from '../api/Product';

export const GET_PRODUCT = 'GET_PRODUCT';
export async function getProduct(): Promise<ProductDTO[] | undefined> {
  const response = await fetch('https://api.example.com/product');
  const products = await response.json();
  return products || [];
}
