import { Content } from './Content';
import { Header } from './Header';

export function Home() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <hr />
      <Content />
      <hr />
      <footer className=" h-[60px]">
        Made by Alexander Karuzoo - GitHub @KalZera
      </footer>
    </div>
  );
}
