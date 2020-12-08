import React from 'react';
import PropTypes from 'prop-types';

import InViewport from 'components/InViewport';
import Button from 'components/Button';

import styles from './PortfolioItem.module.scss';

import PortfolioIcons from './PortfolioIcons';
// import { IconDesktop } from 'components/Icon';

import Picture from '../Picture';

export const PortfolioItem = ({
  src,
  title,
  description,
  tech,
  url,
  source,
}) => {
  const { name, types, fallback } = src;
  const srcs = types.map((type) => ({
    type,
    src: require(`./img/${name}.${type}`),
  }));
  const defaultImg = require(`./img/${name}.${fallback}`);

  return (
    <div className={styles.portfolioItem}>
      <div className={styles.cube}>
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
