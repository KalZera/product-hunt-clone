export function Content() {
  return (
    <section className="flex-1 w-[80%] mx-auto p-4">
      <div className="flex w-full items-center p-4 bg-green-300 rounded-lg">
        <span className="m-3">Trending Topics</span>
        <div className="flex gap-2">
          <button className="btn btn-accent">AI</button>
          <button className="btn btn-accent">Marketing</button>
          <button className="btn btn-accent">Saas</button>
          <button className="btn btn-accent">Tech</button>
        </div>
      </div>
      <div>
        <p className="text-xl font-bold my-2">The next successful app </p>
      </div>
      <div className="flex w-full columns-2 ">
        <div className="w-[70%] bg-gray-200"> column 1</div>
        <div className="w-[30%]"> column 2</div>
      </div>
    </section>
  );
}
