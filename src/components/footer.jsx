import logo from '../assets/images/pokexplorer-logo.png';
import '../css/footer.css';

export default function Footer() {
  return (
    <footer>
      <a href='/' className='footer__logo' aria-label='Go back to the homepage' title='Go back to the homepage'>
        <img src={logo} alt='' aria-hidden='true' />
      </a>
    </footer>
  );
}
