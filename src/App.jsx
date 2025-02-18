import { Outlet, useLocation } from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <main className={pathname === '/quiz' ? 'main-bg--2' : 'main-bg--1'}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
