import { Link } from 'react-router-dom';

import '../css/button.css';

export default function Button({ link, href, className, children, onClick, disabled = false }) {
  if (link) {
    return (
      <Link to={href} className={`button ${className}`}>
        {children}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={`button ${className}`} disabled={disabled}>
        {children}
      </button>
    );
  }
}
