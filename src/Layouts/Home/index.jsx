import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="container">
        <Outlet />
      </section>
    </>
  );
}