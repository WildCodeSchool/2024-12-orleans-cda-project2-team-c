import '../css/button.css';

export default function Button({ link, href, className, children, onClick, disabled = false }) {
  if (link) {
    return (
      <a href={href} className={`button ${className}`}>
        {children}
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={`button ${className}`} disabled={disabled}>
        {children}
      </button>
    );
  }
}
