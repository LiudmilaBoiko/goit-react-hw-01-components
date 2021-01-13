import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats}) {
    return (
        <section className={s.statistics}>
            { title && (<h2 className={s.title}>{title}</h2>)}

            <ul className={s.statList}>
                {stats.map(stat => (
                    <li className={s.item} key={stat.id} style={{ backgroundColor: colorGenerate() }}>
                    <span className={s.label}>{stat.label}</span>
                    <span className={s.percentage}>{stat.percentage}%</span>
            </li>
         ))}
         </ul>
        </section>
    );
   
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}

export default Statistics;

function colorGenerate() {
  let result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(Math.floor(Math.random() * 255));
  }
  const alpha = Math.random(0.2);
  return `rgba(${result}, ${alpha})`;
}