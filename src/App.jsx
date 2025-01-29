import Footer from './components/footer';
import Header from './components/header';
import PokemonList from './pages/pokemon-list';

function App() {
  return (
    <>
      <Header />
      <main>
        <PokemonList />
      </main>
      <Footer />
    </>
  );
}

export default App;
