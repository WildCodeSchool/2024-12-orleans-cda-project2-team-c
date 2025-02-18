import '../css/badge-type.css';
import { types } from '../utils/types';

export default function Badge({ typeName }) {
  const type = types[typeName];

  const style = type
    ? {
        background: type.length === 2 ? type[0] : `linear-gradient(to bottom, ${type[0]} 50%, ${type[1]} 50%)`,
        color: type[type.length - 1],
      }
    : { background: 'var(--grey-dark)', color: 'white' };

  return (
    <div className='badge capital' style={style}>
      {type ? typeName : 'Unknown'}
    </div>
  );
}
