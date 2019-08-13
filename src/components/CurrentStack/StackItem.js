import React from 'react';
import PropTypes from 'prop-types';

export const SkillsItem = ({url, img, name, width}) => {
  return <div className="stack__item">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        src={require(`./img/${img}`)}
        alt={name}
        className="stack__image img--responsive"
        width={width}
        title={name}
      />
    </a>
  </div>;
};

SkillsItem.propTypes = {
  url: PropTypes.string.isRequired,
  	img: PropTypes.string.isRequired,
  	name: PropTypes.string.isRequired,
  	width: PropTypes.string.isRequired
};

export default SkillsItem;
