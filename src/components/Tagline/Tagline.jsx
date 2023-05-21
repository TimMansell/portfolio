import styles from './Tagline.module.scss';

export const Tagline = () => {
  return (
    <div className={styles.tagline}>
      <div>Front-end Engineer</div>
      {/* <div className={styles.item}>Javascript Engineer</div>
      <div className={styles.item}>React Engineer</div>
      <div className={styles.item}>VueJS Engineer</div> */}
    </div>
  );
};

export default Tagline;
