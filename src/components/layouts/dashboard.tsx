import { ReactElement, useContext } from 'react';
import { Appbar } from '../misc/Appbar';
import { Sidebar } from '../misc/Sidebar';
import styles from '../misc/index.module.scss';
import { GuildContext } from '../../utils/contexts/GuildContext';

export function DashboardLayout({ children }: { children: ReactElement }) {
  const { guild } = useContext(GuildContext);
  return (
    <>
      <Sidebar guild={guild} />
      <div className={styles.layout}>
        <Appbar guild={guild} />
        <>{children}</>
      </div>
    </>
  );
}
