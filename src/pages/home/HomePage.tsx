import { Content } from './Content';
import { Header } from './Header';

export function Home() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <div className="divider my-0.5" />
      <Content />
      <hr />
      <footer className=" h-[60px]">
        <div className=" flex flex-col content-center items-center">
          Made by Alexander Karuzoo - GitHub @KalZera
        </div>
      </footer>
    </div>
  );
}
