import pokemon from '../mock-pokemon';
import './stats.css';

function StatBar({ stats, key }) {
  const statBarElem = [
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
  ];

  const nbGreen = Math.round(stats.base_stat / 10);

  return (
    <figure className='stats'>
      {statBarElem.map((element, i) => {
        return <div className={i < 10 - nbGreen ? 'statsEnable' : 'statsValid'} key={i}></div>;
      })}
      <figcaption>{stats.stat.name}</figcaption>
    </figure>
  );
}

export default function Stats() {
  const selectedStats = [pokemon.stats[0], pokemon.stats[1], pokemon.stats[2], pokemon.stats[5]];
  return (
    <>
      <div className='statsContent'>
        {selectedStats.map((stats) => {
          return <StatBar key={stats.stat.name} stats={stats} />;
        })}
      </div>
    </>
  );
}
