import { HeaderContent, ProductBox, ReviewedBox } from './components';
export function Content() {
  return (
    <section className="flex-1 xl:w-10/12 mx-auto p-4 w-full">
      <HeaderContent />
      <div className="lg:flex w-full lg:columns-3 columns-1 ">
        <ProductBox />
        <div className="divider lg:divider-horizontal" />
        <ReviewedBox />
      </div>
    </section>
  );
}
