import { HeaderContent } from './components';
import { ProductBox } from './ProductBox';
import { ReviewedBox } from './ReviewedBox';
export function Content() {
  return (
    <section className="flex-1 w-[80%] mx-auto p-4">
      <HeaderContent />
      <div className="flex w-full columns-3 ">
        <ProductBox />
        <div className="divider divider-horizontal" />
        <ReviewedBox />
      </div>
    </section>
  );
}
