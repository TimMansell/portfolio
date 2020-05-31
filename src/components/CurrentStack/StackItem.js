import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

export const SkillsItem = ({ url, img, name, width }) => {
  return (
    <div className="stack__item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image src={require(`./img/${img}`)} name={name} width={width} />
      </a>
    </div>
  );
};

SkillsItem.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default SkillsItem;
