import { mockProducts } from '../../../services/services/GetProduct';
import { LineProduct } from './LineProduct';
type Props = {
  categorySelected: string | null;
};
export function ProductBox({ categorySelected }: Props) {
  return (
    <div className="flex-auto lg:max-w-[70%]">
      <div>
        <p className="text-xl font-bold my-2">The next successful app </p>
      </div>
      <div className="">
        {mockProducts.map(app =>
          !categorySelected ? (
            <LineProduct app={app} key={app.id} />
          ) : (
            app.categories.includes(categorySelected) && (
              <LineProduct app={app} key={app.id} />
            )
          ),
        )}
        <div>
          <button className="btn btn-primary btn-block">Show more</button>
        </div>
      </div>
    </div>
  );
}
