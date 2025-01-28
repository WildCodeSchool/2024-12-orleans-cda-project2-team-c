import './App.css';
import Badge from './components/badge-type';
import Footer from './components/footer';
import Search from './components/search-section';

function App() {
  return (
    <>
      <Search title='My Pokédex' />
      <br />
      <Badge typeName='fire' />
      <Badge typeName='bug' />
      <Badge typeName='rock' />
      <Badge typeName='water' />
      <Badge typeName='steel' />
      <Badge typeName='poison' />
      <Badge typeName='flying' />
      <Badge typeName='dragon' />
      <Badge typeName='dark' />
      <Badge typeName='ground' />
      <Badge typeName='fighting' />
      <Badge typeName='electric' />
      <Badge typeName='fairy' />
      <Badge typeName='psychic' />
      <Badge typeName='ghost' />
      <Badge typeName='normal' />
      <Badge typeName='grass' />
      <Badge typeName='ice' />
      <Badge typeName='charlou' />
      <Badge typeName='' />
      <Footer />
    </>
  );
}

export default App;
