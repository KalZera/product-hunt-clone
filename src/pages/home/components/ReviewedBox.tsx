import { memo } from 'react';
import { ProductReviewed } from './ProductReviewed';
import { ProductDTO } from '../../../services/api/Product';
import { useGetProducts } from '../../../services/hooks';
import { Loading } from '../../../components/Loading';
export function ReviewedBoxComponent() {
  const { data, isLoading } = useGetProducts();
  return (
    <div className="flex-1">
      <div>
        <p className="text-2xl font-bold my-2">Products reviewed by us </p>
      </div>
      <div className="">
        {isLoading && <Loading />}
        {data?.map((app: ProductDTO) => (
          <ProductReviewed app={app} key={app.id} />
        ))}
      </div>
      <div className="flex">
        <p className="text-2xl font-bold my-2">Coming Soon </p>
      </div>
      <div>
        <div className="flex gap-2 m-4 items-center">
          <div className="flex-1">
            <p className="text-xl font-bold">{data?.[0].title}</p>
            <p className="text-md">{data?.[0].description}</p>
            {!isLoading && (
              <p className="btn btn-link min-h-[0.5rem] h-[0.5rem] pl-[0px]">
                + follow
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const ReviewedBox = memo(ReviewedBoxComponent);
