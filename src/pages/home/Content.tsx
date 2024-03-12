import { useState } from 'react';
import { ReviewedBox, ProductBox, HeaderContent } from './components';
import { useGetCategories } from '../../services/hooks';
import { CategoryDTO } from '../../services/api/Category';

export function Content() {
  const [categorySelected, setCategory] = useState<string | null>(null);
  const { data: categories, isLoading } = useGetCategories();

  return (
    <section className="flex-1 xl:w-10/12 mx-auto p-4 w-full">
      <HeaderContent>
        {isLoading && <p>Loading...</p>}
        {categories?.map((category: CategoryDTO) => (
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
      </HeaderContent>
      <div className="lg:flex w-full lg:columns-3 columns-1 ">
        <ProductBox categorySelected={categorySelected} />
        <div className="divider lg:divider-horizontal" />
        <ReviewedBox />
      </div>
    </section>
  );
}
