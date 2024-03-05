import { useQuery } from '@tanstack/react-query';
import { GET_PRODUCT, getProduct } from '../services/GetProduct';

export const useGetProducts = () =>
  useQuery({ queryKey: [GET_PRODUCT], queryFn: getProduct });
