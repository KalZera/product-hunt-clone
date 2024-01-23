export function Home() {
  return (
    <div className="flex flex-col h-[100vh]">
      <header className="h-10">
        <div>Header Menu</div>
      </header>
      <hr />
      <section className="flex-1">
        <h1>Content</h1>
      </section>
      <hr />
      <footer className=" h-[60px]">Footer application</footer>
    </div>
  );
}
