import { listProductsMsw } from '../services/services/GetProduct.msw';
import { listCategoryMsw } from '../services/services/GetCategory.msw';

export const handlers = [listProductsMsw, listCategoryMsw];
