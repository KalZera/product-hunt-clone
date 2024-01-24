export function Header() {
  return (
    <header className="border rounded-md ">
      <div className="flex m-2 p-2 justify-between items-center">
        <div className="flex ">
          <input
            type="text"
            placeholder="search"
            className="input input-bordered input-sm"
          />
        </div>
        <div className="flex flex-1">
          <button className="btn btn-link" type="button">
            Products
          </button>
          <button className="btn btn-link" type="button">
            Category
          </button>
          <button className="btn btn-link" type="button">
            About
          </button>
        </div>
        <div className="flex justify-around">
          <button className="btn btn-neutral" type="button">
            Login
          </button>
          <div className="w-2" />
          <button className="btn btn-neutral" type="button">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
