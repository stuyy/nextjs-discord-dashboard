import styles from './index.module.scss';
import { RiMenu3Line } from 'react-icons/ri';

export const Appbar = () => (
  <div className={styles.appbar}>
    <div className={styles.menu}>
      <RiMenu3Line size={65} />
      <p>Menu</p>
    </div>
    <div>
      <p>{"Anson's Discord"}</p>
    </div>
  </div>
);
