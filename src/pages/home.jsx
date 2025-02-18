import Button from '../components/button';
import Carousel from '../components/carousel';

export default function Home() {
  return (
    <>
      <Carousel />
      <Button link href='/pokelist' className={'button  button--red button--center'}>
        Explore all !
      </Button>
    </>
  );
}
