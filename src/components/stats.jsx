import pokemon from '../mock-pokemon';
import './stats.css';

function StatBar({ stats }) {
  const statBarElem = [
    <div key={1}></div>,
    <div key={2}></div>,
    <div key={3}></div>,
    <div key={4}></div>,
    <div key={5}></div>,
    <div key={6}></div>,
    <div key={7}></div>,
    <div key={8}></div>,
    <div key={9}></div>,
    <div key={10}></div>,
  ];

  const nbGreen = Math.round(stats.base_stat / 10);

  return (
    <figure className='stats'>
      {statBarElem.map((element, i) => {
        return <div className={i < 10 - nbGreen ? 'statsEnable' : 'statsValid'} key={i}></div>;
      })}
      <figcaption className='stat-name'>{stats.stat.name}</figcaption>
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
