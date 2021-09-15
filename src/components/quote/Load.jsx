import React from 'react';
import PropTypes from 'prop-types';

export const Load = ({ onClick }) => {
  return <button onClick={onClick} aria-label="get-quote">Get a Quote</button>;
};

Load.propTypes = {
  onClick: PropTypes.func.isRequired
};
