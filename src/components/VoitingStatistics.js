import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
import styles from './VoitingStatistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    {total ? (
          <ul className={styles.statistics}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li className={styles.conclusion}>Total: {total}</li>
            <li className={styles.conclusion}>Positive feedback: {positivePercentage}%</li>
          </ul>
    ) : (<Notification message={'No feedback given'} />)
    }
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;