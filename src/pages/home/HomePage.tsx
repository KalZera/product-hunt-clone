import { Content } from './Content';
import { Header } from './Header';

export function Home() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <div className="divider my-0.5" />
      <Content />
      <hr />
      <footer className="">
        <div className="h-[60px] flex flex-col justify-center items-center">
          <p className="text-sm">Made by Alexander Karuzoo - GitHub @KalZera</p>
        </div>
      </footer>
    </div>
  );
}
