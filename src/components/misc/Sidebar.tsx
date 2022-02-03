import Image from 'next/image';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsTerminal } from 'react-icons/bs';
import { FaWrench } from 'react-icons/fa';
import { RiLogoutCircleLine } from 'react-icons/ri';
import styles from './index.module.scss';

export const Sidebar = () => (
  <div className={styles.sidebar}>
    <Image
      className={styles.avatar}
      src="/me.png"
      height={80}
      width={80}
      alt="guild_avatar"
    />
    <div className={styles.icons}>
      <div>
        <MdSpaceDashboard size={48} />
      </div>
      <div>
        <BsTerminal size={48} />
      </div>
      <div>
        <FaWrench size={48} />
      </div>
    </div>
    <div>
      <RiLogoutCircleLine size={48} />
    </div>
  </div>
);
