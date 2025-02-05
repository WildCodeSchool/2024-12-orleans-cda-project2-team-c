import { Outlet } from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import QuizResults from './components/quiz-results';

function App() {
  return (
    <>
      <Header />
      <QuizResults />
      {/* <main>
        <Outlet />
      </main> */}
      <Footer />
    </>
  );
}

export default App;
