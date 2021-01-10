import PropTypes from 'prop-types';

// const stat = { "id": "id-1", "label": ".docx", "percentage": 22 };

function Statistics({ title, stats}) {
    return (
        <section class="statistics">
            { title && (<h2 class="title">{title}</h2>)}

            <ul class="stat-list">
                {stats.map(stat => (
                    <li class="item" key={stat.id} style={{ backgroundColor: colorGenerate() }}>
                    <span class="label">{stat.label}</span>
                    <span class="percentage">{stat.percentage}%</span>
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