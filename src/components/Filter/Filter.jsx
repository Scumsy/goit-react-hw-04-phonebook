import PropTypes from 'prop-types';
import { FilterStyle } from './Filter.styled';

export const Filter = ({ onChange, type, name, value }) => {
  return (
    <label>
      Find contacts by name
      <FilterStyle onChange={onChange} type={type} name={name} value={value} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
