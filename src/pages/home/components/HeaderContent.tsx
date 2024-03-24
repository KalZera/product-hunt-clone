type PropsHeader = {
  children: React.ReactNode;
};

export function HeaderContent({ children }: PropsHeader) {
  return (
    <div className="flex w-full items-center p-2 rounded-lg border mb-2">
      <span className="m-2">Trending Topics</span>
      <div className="flex gap-2 sm:overflow-hidden overflow-x-scroll">
        {children}
      </div>
    </div>
  );
}
