import PropTypes from 'prop-types';
import { Button, OptWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options }) => {
  return (
    <OptWrapper>
      <Button type="button" onClick={() => options('good')}>
        Good
      </Button>
      <Button type="button" onClick={() => options('neutral')}>
        Neutral
      </Button>
      <Button type="button" onClick={() => options('bad')}>
        Bad
      </Button>
    </OptWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.func.isRequired,
};
