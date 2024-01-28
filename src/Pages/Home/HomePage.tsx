import { useAuth } from '@clerk/clerk-react';
import { Content } from './Content';
import { Header } from './Header';

export function Home() {
  const { userId } = useAuth();
  console.log({ userId });
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <hr />
      <Content />
      <hr />
      <footer className=" h-[60px]">Footer application</footer>
    </div>
  );
}
