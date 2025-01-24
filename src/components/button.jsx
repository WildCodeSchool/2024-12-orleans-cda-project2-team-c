import '../css/button.css';

export default function Button({ link, href, className, content, onClick }) {
  if (link) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={className}>
        {content}
      </button>
    );
  }
}
