import { useMemo } from 'react';
import { mockProducts } from '../../../services/services/GetProduct';
import { LineProduct } from './LineProduct';
import { EmptyList } from '../../../components';
type Props = {
  categorySelected: string | null;
};
export function ProductBox({ categorySelected }: Props) {
  const products = useMemo(() => {
    return mockProducts.filter(app =>
      !categorySelected ? true : app.categories.includes(categorySelected),
    );
  }, [categorySelected]);
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
