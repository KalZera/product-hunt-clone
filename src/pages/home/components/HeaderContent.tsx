type PropsHeader = {
  children: React.ReactNode;
};

export function HeaderContent({ children }: PropsHeader) {
  return (
    <div className="flex w-full items-center p-4 rounded-lg border mb-4">
      <span className="m-3">Trending Topics</span>
      <div className="flex gap-2 sm:overflow-hidden overflow-x-scroll">
        {children}
      </div>
    </div>
  );
}
