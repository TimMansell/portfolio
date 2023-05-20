import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import Button from 'components/Button';
import PortfolioIcons from './PortfolioIcons';
import Picture from '../Picture';
import Labels from '../Labels';

import styles from './PortfolioItem.module.scss';

export const PortfolioItem = ({
  img,
  title,
  years,
  types,
  description,
  tech,
  url,
  source,
}) => {
  const [cubeStyles, setCubeStyles] = useState({});
  const cubeElement = useRef(null);

  const getCubeHeight = debounce(() => {
    const { clientHeight } = cubeElement.current;

    setCubeStyles({
      transformOrigin: `50% 50% -${clientHeight / 2}px`,
    });
  });

  const labels = [
    {
      type: 'secondary',
      items: [...years, ...types],
    },
    {
      type: 'primary',
      items: tech,
    },
  ];

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
          <Picture
            src={`Portfolio/img/${img}`}
            title={`${title} portfolio item`}
            types={['webp', 'jpg']}
            srcSizes={[
              {
                sizes: ['480', '640', '768', '1024', '1280'],
              },
            ]}
            sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
            isLazy
          />
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
      <div className={styles.labels}>
        <Labels labels={labels} />
      </div>
    </div>
  );
};

export default PortfolioItem;

PortfolioItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  years: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  source: PropTypes.string,
};
