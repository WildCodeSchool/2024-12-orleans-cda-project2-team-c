import { useState } from 'react';

import './App.css';
import Footer from './components/footer';
import Loader from './components/loader';

function App() {
  const [data, setData] = useState(null);

  return (
    <>
      {data ? 'main 🤚' : <Loader />}
      <Footer />
    </>
  );
}

export default App;
