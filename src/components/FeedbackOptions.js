import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';



const FeedbackOptions = ({onClickVoteGood, onClickVoteNeutral, onClickVoteBad}) => (
  <div>
    <button className={styles.buttons} type="button" onClick={onClickVoteGood}>Good</button>
    <button className={styles.buttons} type="button" onClick={onClickVoteNeutral}>Neutral</button>
    <button className={styles.buttons} type="button" onClick={onClickVoteBad}>Bad</button>
  </div>
);

FeedbackOptions.propTypes = {
  onClickVoteGood: PropTypes.func.isRequired,
  onClickVoteNeutral: PropTypes.func.isRequired,
  onClickVoteBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;