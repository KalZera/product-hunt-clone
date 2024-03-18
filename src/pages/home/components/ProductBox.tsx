import { useMemo, memo } from 'react';
import { LineProduct } from './LineProduct';
import { EmptyList } from '../../../components';
import { useGetProducts } from '../../../services/hooks';
import { Loading } from '../../../components/Loading';
type Props = {
  categorySelected: string | null;
};
export function ProductBoxComponent({ categorySelected }: Props) {
  const { data, isLoading } = useGetProducts();
  const products = useMemo(() => {
    if (!data) return [];
    return data.filter(app =>
      !categorySelected ? true : app.categories.includes(categorySelected),
    );
  }, [categorySelected, data]);

  if (isLoading) return <Loading />;

  return (
    <div className="flex-auto lg:max-w-[70%]">
      <div>
        <p className="text-xl font-bold my-2">The next successful app </p>
      </div>
      <div
        className={!products.length ? 'flex items-center flex-col w-full' : ''}
      >
        {products.length ? (
          <>
            {products.map(app => (
              <LineProduct app={app} key={app.id} />
            ))}
            <div>
              <button className="btn btn-primary btn-block">Show more</button>
            </div>
          </>
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  );
}

export const ProductBox = memo(ProductBoxComponent);
