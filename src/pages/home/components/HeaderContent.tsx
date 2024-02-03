export function HeaderContent() {
  return (
    <div className="flex w-full items-center p-4 rounded-lg border ">
      <span className="m-3">Trending Topics</span>
      <div className="flex gap-2">
        <button className="btn btn-sm ">
          <p className="px-2">AI</p>
        </button>
        <button className="btn btn-sm ">
          <p className="px-2">Marketing</p>
        </button>
        <button className="btn btn-sm ">
          <p className="px-2">Saas</p>
        </button>
        <button className="btn btn-sm ">
          <p className="px-2">Tech</p>
        </button>
      </div>
    </div>
  );
}
