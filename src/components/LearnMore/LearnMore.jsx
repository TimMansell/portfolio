import { Link } from 'react-scroll';

import styles from './LearnMore.module.scss';

import { IconChevronDown } from 'components/Icon';

export const ListItem = () => {
  return (
    <div className={styles.learnMore}>
      <Link
        data-e2e="learn-more-btn"
        className={styles.link}
        to="profile"
        smooth={true}
      >
        <IconChevronDown size="sm" className={styles.scroll} />
      </Link>
    </div>
  );
};

export default ListItem;
