import { Dispatch } from 'react';
import { Categories } from '../../../services/services/GetCategory';

type Props = {
  categorySelected: string | null;
  setCategory: Dispatch<React.SetStateAction<string | null>>;
};

export function HeaderContent({ categorySelected, setCategory }: Props) {
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
