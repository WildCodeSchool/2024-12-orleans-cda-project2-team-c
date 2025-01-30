import { Link } from 'react-router-dom';

import '../css/button.css';

export default function Button({ link, href, className, children, onClick }) {
  if (link) {
    return (
      <Link to={href} className={`button ${className}`}>
        {children}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={`button ${className}`}>
        {children}
      </button>
    );
  }
}
