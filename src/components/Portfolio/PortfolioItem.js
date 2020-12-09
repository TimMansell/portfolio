import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import InViewport from 'components/InViewport';
import Button from 'components/Button';
import PortfolioIcons from './PortfolioIcons';
import Picture from '../Picture';

import styles from './PortfolioItem.module.scss';

export const PortfolioItem = ({
  src,
  title,
  description,
  tech,
  url,
  source,
}) => {
  const [cubeStyles, setCubeStyles] = useState({});
  const cubeElement = useRef(null);

  const { name, types, fallback } = src;
  const srcs = types.map((type) => ({
    type,
    src: require(`./img/${name}.${type}`),
  }));
  const defaultImg = require(`./img/${name}.${fallback}`);

  const getCubeHeight = debounce(() => {
    const { clientHeight } = cubeElement.current;

    setCubeStyles({
      transformOrigin: `50% 50% -${clientHeight / 2}px`,
    });
  });

  useEffect(() => {
    window.addEventListener('scroll', getCubeHeight);

    return () => window.removeEventListener('scroll', getCubeHeight);
  });

  useEffect(() => {
    window.addEventListener('resize', getCubeHeight);

    return () => window.removeEventListener('resize', getCubeHeight);
  });

  return (
    <div className={styles.portfolioItem}>
      <div className={styles.cube} style={cubeStyles} ref={cubeElement}>
        <div className={styles.browser}>
          <PortfolioIcons />
          <InViewport>
            <Picture srcs={srcs} name={title} defaultImg={defaultImg} />
          </InViewport>
        </div>

        <div className={styles.info}>
          {/* <h3 className={styles.title}>{title}</h3> */}
          <p className={styles.description}>{description}</p>
          <p className={styles.tech}>{tech}</p>

          <div className={styles.buttons}>
            {url && (
              <Button href={url} target="_blank" title="Visit website">
                Visit website
              </Button>
            )}
            {source && (
              <Button href={source} target="_blank" title="View Souce">
                View source
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;

PortfolioItem.propTypes = {
  src: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string,
  url: PropTypes.string.isRequired,
  source: PropTypes.string,
};
