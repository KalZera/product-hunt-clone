import { Content } from './Content';
import { Header } from './Header';

export function Home() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <div className="divider my-0.5" />
      <Content />
      <hr />
      <footer className=" min-h-[80px]">
        Made by Alexander Karuzoo - GitHub @KalZera
      </footer>
    </div>
  );
}
