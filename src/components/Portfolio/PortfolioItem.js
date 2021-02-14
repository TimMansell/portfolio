import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import Button from 'components/Button';
import PortfolioIcons from './PortfolioIcons';
import Picture from '../Picture';
import Labels from '../Labels';

import useInViewport from 'hooks/useInViewport';

import styles from './PortfolioItem.module.scss';

export const PortfolioItem = ({
  src,
  title,
  year,
  description,
  tech,
  url,
  source,
}) => {
  const [cubeStyles, setCubeStyles] = useState({});
  const cubeElement = useRef(null);
  const isInViewport = useInViewport(cubeElement, 300);

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

  // Check height of image as intially it is lazy loaded.
  useEffect(() => {
    window.requestAnimationFrame(getCubeHeight);

    return () => window.cancelAnimationFrame(getCubeHeight);
  });

  return (
    <div className={styles.portfolioItem}>
      <div className={styles.cube} style={cubeStyles} ref={cubeElement}>
        <div className={styles.browser}>
          <PortfolioIcons title={title} />
          {isInViewport && (
            <Picture srcs={srcs} name={title} defaultImg={defaultImg} />
          )}
        </div>

        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttons}>
            <Button
              href={url}
              target="_blank"
              title="Visit website"
              data-test="portfolio-website-btn"
            >
              Visit website
            </Button>
            {source && (
              <Button
                href={source}
                target="_blank"
                title="View Souce"
                data-test="portfolio-source-btn"
              >
                View source
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className={styles.tech} data-test="portfolio-tech">
        <Labels items={[year]} type="secondary" />
      </div>
      <Labels items={tech} type="primary" />
    </div>
  );
};

export default PortfolioItem;

PortfolioItem.propTypes = {
  src: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  source: PropTypes.string,
};
