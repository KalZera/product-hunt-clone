import { mockProducts } from './mockFile';
import { LineProduct } from './components';
export function ProductBox() {
  return (
    <div className="flex-auto max-w-[70%] bg-gray-200">
      <div>
        <p className="text-xl font-bold my-2">The next successful app </p>
      </div>
      <div className="">
        {mockProducts.map(app => (
          <LineProduct app={app} key={app.id} />
        ))}
      </div>
    </div>
  );
}
