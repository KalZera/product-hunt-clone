import { useState } from 'react';
import { Product } from '../../../services/api/Product';
import { IconTriangleFilled } from '@tabler/icons-react';

interface Props {
  app: Product;
}
export function LineProduct({ app }: Props) {
  const [votes, setVotes] = useState<number>(app.upvotes);
  return (
    <div className="flex gap-2 m-4 items-center" key={app.id}>
      <div className="">
        <img src={app.url} alt={app.title} className="rounded-md w-12" />
      </div>
      <div className="flex-1">
        <p className="text-xl font-bold">{app.title}</p>
        <p className="text-md">{app.description}</p>
        <p className="text-md">categoria</p>
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
