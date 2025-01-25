import pokemon from '../mock-pokemon';
import './stats.css';

function StatBar({ stat }) {
  const statBarElem = [
    <div key></div>,
    <div key></div>,
    <div key></div>,
    <div key></div>,
    <div key></div>,
    <div key></div>,
    <div key></div>,
    <div key></div>,
    <div key></div>,
    <div key></div>,
  ];

  const nbGreen = Math.round(stat.base_stat / 10);

  return (
    <figure className='stats'>
      {statBarElem.map((element, i) => {
        return <div key={element} className={i < 10 - nbGreen ? 'statsEnable' : 'statsValid'}></div>;
      })}
      <figcaption>{stat.stat.name}</figcaption>
    </figure>
  );
}

export default function Stats() {
  const selectedStats = [pokemon.stats[0], pokemon.stats[1], pokemon.stats[2], pokemon.stats[5]];
  return (
    <>
      <div className='statsContent'>
        {selectedStats.map((stat) => {
          return <StatBar key={stat.stat.name} stat={stat} />;
        })}
      </div>
    </>
  );
}
