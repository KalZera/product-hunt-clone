import { products } from './mockFile';
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
      <div className="flex w-full columns-2 ">
        <div className="w-[70%] bg-gray-200">
          <div>
            <p className="text-xl font-bold my-2">The next successful app </p>
          </div>
          <div className="">
            {products.map(app => (
              <div className="flex gap-2 m-4 items-center" key={app.id}>
                <div className="">
                  <img
                    src={app.url}
                    alt={app.title}
                    className="rounded-md w-12"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xl font-bold">{app.title}</p>
                  <p className="text-md">{app.description}</p>
                  <p className="text-md">categoria</p>
                </div>
                <div className="gap-2 flex flex-col items-center">
                  <button className="btn btn-accent">Upvote</button>
                  <p className="text-md">{app.upvotes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[30%]"> column 2</div>
      </div>
    </section>
  );
}
