import { useState } from 'react';
import { ProductDTO } from '../../../services/api/Product';
import { Categories } from '../../../services/services/GetCategory';
import { IconTriangleFilled } from '@tabler/icons-react';

interface Props {
  app: ProductDTO;
}
export function LineProduct({ app }: Props) {
  const [votes, setVotes] = useState<number>(app.upvotes);
  const category = Categories.filter(c => app.categories.includes(c.id));
  return (
    <div className="flex gap-2 m-4 items-center" key={app.id}>
      <div className="">
        <img src={app.url} alt={app.title} className="rounded-md w-12" />
      </div>
      <div className="flex-1">
        <p className="text-xl font-bold">{app.title}</p>
        <p className="text-md">{app.description}</p>
        <div className="flex gap-1">
          {category.map(c => (
            <div className="badge badge-outline" key={c.id}>
              {c.title}
            </div>
          ))}
        </div>
      </div>
      <div className="gap-2 flex flex-col items-center">
        <button className="btn " onClick={() => setVotes(prev => ++prev)}>
          <span className="flex flex-col items-center">
            <IconTriangleFilled />
            <p className="text-md">{votes === 0 ? '---' : votes}</p>
          </span>
        </button>
      </div>
    </div>
  );
}
