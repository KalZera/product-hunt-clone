import { Categories } from '../../../services/services/GetCategory';

export function HeaderContent() {
  return (
    <div className="flex w-full items-center p-4 rounded-lg border mb-2 ">
      <span className="m-3">Trending Topics</span>
      <div className="flex gap-2 sm:overflow-hidden overflow-x-scroll">
        {Categories.map(category => (
          <button className="btn btn-sm" key={category.id}>
            <p className="px-2">{category.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
