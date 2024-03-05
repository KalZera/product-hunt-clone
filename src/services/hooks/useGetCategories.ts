import { useQuery } from '@tanstack/react-query';
import { GET_CATEGORY, getCategory } from '../services/GetCategory';

export const useGetCategories = () =>
  useQuery({ queryKey: [GET_CATEGORY], queryFn: getCategory });
