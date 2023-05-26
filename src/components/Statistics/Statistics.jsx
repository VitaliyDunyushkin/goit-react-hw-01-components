import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from 'utils/GetRandomHexColor';

export default function Statistics({ title, data }) {
  return (
    <section className={css.statistics}>
      {title !== '' ? <h2 className={css.title}>{title}</h2> : ''}
      <ul className={css.statList}>
        {data.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              id={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
  title: PropTypes.string,
};
