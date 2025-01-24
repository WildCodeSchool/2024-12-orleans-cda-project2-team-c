import '../css/loader.css';

export default function Loader() {
  return (
    <div className='loader' aria-hidden='true'>
      <img src={`/images/loader-${Math.floor(Math.random() * 5 + 1)}.png`} alt='' />
    </div>
  );
}
