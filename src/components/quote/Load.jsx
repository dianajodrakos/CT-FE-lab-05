import React from 'react';
import PropTypes from 'prop-types';

export default function Load({ onClick }) {
  return <button onClick={onClick} aria-label="get-quote">Get a Quote</button>;
}

Load.propTypes = {
  onClick: PropTypes.func.isRequired
};
