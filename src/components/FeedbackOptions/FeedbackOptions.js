import PropTypes from 'prop-types';
import { Button, OptWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptWrapper>
      {options.map((option, index) => (
        <div key={index}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </div>
      ))}
    </OptWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
