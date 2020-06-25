import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ begin, end }) => {
  const [counter, setCounter] = useState(begin);
  const [randomCountTo] = useState(
    Math.floor(Math.random() * (end - begin + 1) + begin) + 1
  );

  useEffect(() => {
    if (counter <= randomCountTo) {
      const timer = setInterval(() => {
        setCounter(counter + 1);
      }, 1);

      return () => clearInterval(timer);
    }
  });

  return <>{counter}+</>;
};

Counter.propTypes = {
  end: PropTypes.number.isRequired,
  begin: PropTypes.number.isRequired,
};

export default Counter;
