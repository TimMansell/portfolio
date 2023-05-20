import format from 'date-fns/format';

import styles from './Copyright.module.scss';

export const Copyright = () => {
  return (
    <p className={styles.copyright}>
      &copy; {format(new Date(), 'yyyy')}
      <br />
      Tim Mansell
    </p>
  );
};

export default Copyright;
