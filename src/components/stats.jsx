import '../css/stats.css';

function StatBar({ stats }) {
  const nbGreen = Math.round(stats.base_stat / 10);

  return (
    <figure className='stats'>
      {Array.from(new Array(10)).map((element, i) => {
        return <div className={i < 10 - nbGreen ? 'stats-enable' : 'stats-valid'} key={i}></div>;
      })}
      <figcaption className='stat-name'>
        {stats.stat.name.charAt(0).toUpperCase() + stats.stat.name.slice(1)}
      </figcaption>
    </figure>
  );
}

export default function Stats({ pokemon }) {
  console.log(pokemon);

  const selectedStats = [pokemon.stats[0], pokemon.stats[1], pokemon.stats[2], pokemon.stats[5]];
  return (
    <>
      <div className='stats-content'>
        {selectedStats.map((stats) => {
          return <StatBar key={stats.stat.name} stats={stats} />;
        })}
      </div>
    </>
  );
}
