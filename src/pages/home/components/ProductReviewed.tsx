import { Product } from '../../../services/api/Product';
import { IconStar } from '@tabler/icons-react';

interface Props {
  app: Product;
}
export function ProductReviewed({ app }: Props) {
  return (
    <div className="flex gap-2 m-4 items-center" key={app.id}>
      <div className="flex-1">
        <p className="text-xl font-bold">{app.title}</p>
        <p className="text-md">{app.description}</p>
        {app.rating ? (
          <div className="badge badge-outline">
            <IconStar width={16} />
            {app.rating}
          </div>
        ) : (
          <div className="badge badge-outline">No rating</div>
        )}
      </div>
      <div className="">
        <img src={app.url} alt={app.title} className="rounded-md w-12" />
      </div>
    </div>
  );
}
