import logo from '../assets/images/pokexplorer-logo.png';
import '../css/footer.css';

export default function Footer() {
  return (
    <footer>
      <a href='/' className='footer__logo' aria-label='Go back to the homepage' title='Go back to the homepage'>
        <img src={logo} alt='' aria-hidden='true' />
      </a>

      <div className='footer__network-container'>
        <a
          href='#'
          className='footer__network-link'
          aria-label='Visit our Facebook page'
          title='Visit our Facebook page'
        >
          <img src='/icons/facebook-white-64.png' alt='' aria-hidden='true' />
        </a>
        <a
          href='#'
          className='footer__network-link'
          aria-label='Visit our Instagram account'
          title='Visit our Instagram account'
        >
          <img src='/icons/instagram-white-64.png' alt='' aria-hidden='true' />
        </a>
      </div>
    </footer>
  );
}
