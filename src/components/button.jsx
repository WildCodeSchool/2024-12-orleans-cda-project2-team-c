import '../css/button.css';

export default function Button({ link, href, className, children, onClick }) {
  if (link) {
    return (
      <a href={href} className={`button ${className}`}>
        {children}
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={`button ${className}`}>
        {children}
      </button>
    );
  }
}
