import { mockProducts } from '../../services/services/GetProduct';
import { ProductReviewed } from './components';
export function ReviewedBox() {
  return (
    <div className="flex-1">
      <div>
        <p className="text-2xl font-bold my-2">Products reviewed by us </p>
      </div>
      <div className="">
        {mockProducts.map(app => (
          <ProductReviewed app={app} key={app.id} />
        ))}
      </div>
      <div className="flex">
        <p className="text-2xl font-bold my-2">Coming Soon </p>
      </div>
      <div>
        <div className="flex gap-2 m-4 items-center">
          <div className="flex-1">
            <p className="text-xl font-bold">{mockProducts[0].title}</p>
            <p className="text-md">{mockProducts[0].description}</p>
            <p className="text-md">+ follow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
