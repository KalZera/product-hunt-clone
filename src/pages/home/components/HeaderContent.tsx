import { useState } from 'react';
import { Categories } from '../../../services/services/GetCategory';

export function HeaderContent() {
  const [categorySelected, setCategory] = useState<string | null>(null);
  return (
    <div className="flex w-full items-center p-4 rounded-lg border mb-2 ">
      <span className="m-3">Trending Topics</span>
      <div className="flex gap-2 sm:overflow-hidden overflow-x-scroll">
        {Categories.map(category => (
          <button
            onClick={() =>
              setCategory(prev => (prev === category.id ? null : category.id))
            }
            className={`btn btn-sm ${category.id === categorySelected ? 'btn-primary' : ''}`}
            key={category.id}
          >
            <p className="px-2">{category.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
