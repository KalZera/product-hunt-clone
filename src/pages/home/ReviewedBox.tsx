import { mockProducts } from './mockFile';
import { ProductReviewed } from './components';
export function ReviewedBox() {
  return (
    <div className="flex-1">
      <div>
        <p className="text-xl font-bold my-2">Products reviewed by us </p>
      </div>
      <div className="">
        {mockProducts.map(app => (
          <ProductReviewed app={app} key={app.id} />
        ))}
      </div>
      <div className="flex justify-center">
        <p className="text-xl font-bold my-2">soon </p>
      </div>
      <div>
        <div className="flex gap-2 m-4 items-center">
          <div className="flex-1">
            <p className="text-2xl font-bold">{mockProducts[0].title}</p>
            <p className="text-md">{mockProducts[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
