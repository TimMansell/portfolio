import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ begin, end }) => {
  const [counter, setCounter] = useState(begin);

  useEffect(() => {
    if (counter < end) {
      const timer = setTimeout(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 40);

      return () => clearTimeout(timer);
    }
  });

  return <>{counter}</>;
};

Counter.propTypes = {
  end: PropTypes.number.isRequired,
  begin: PropTypes.number.isRequired,
};

export default Counter;
