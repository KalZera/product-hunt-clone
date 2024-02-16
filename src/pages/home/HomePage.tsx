import { Content } from './Content';
import { Header, Footer } from '../../components';

export function Home() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <div className="divider my-0.5" />
      <Content />
      <div className="divider my-0.5" />
      <Footer />
    </div>
  );
}
