export function HeaderContent() {
  return (
    <div className="flex w-full items-center p-4 bg-orange-50 rounded-lg">
      <span className="m-3">Trending Topics</span>
      <div className="flex gap-2">
        <button className="btn btn-accent">AI</button>
        <button className="btn btn-accent">Marketing</button>
        <button className="btn btn-accent">Saas</button>
        <button className="btn btn-accent">Tech</button>
      </div>
    </div>
  );
}
