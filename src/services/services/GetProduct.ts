import { v1 } from '../../common/v1';
import { ProductDTO } from '../api/ProductDTO';

export const GET_PRODUCT = 'GET_PRODUCT';
export async function getProduct() {
  return v1<AddressDTO>({
    method: 'POST',
    path: `/addresses`,
    body: params,
  });
}
