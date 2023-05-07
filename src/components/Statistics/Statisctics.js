import PropTypes from 'prop-types';
import { Statistics } from './Statistics.styled';

export const Statiscics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <Statistics className="Statisctics">
      <span>Good: {good}</span>
      <span>Neural: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback: {positivePercentage}</span>
    </Statistics>
  );
};

Statiscics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
