import { GetServerSidePropsContext, NextPage } from 'next';
import { GuildMenuItem } from '../../components/guilds/GuildMenuItem';
import { fetchMutualGuilds } from '../../utils/api';
import { Guild } from '../../utils/types';
import styles from './index.module.scss';

type Props = {
  guilds: Guild[];
};

const MenuPage: NextPage<Props> = ({ guilds }) => {
  return (
    <div className="page">
      <div className={styles.container}>
        <h1 className={styles.title}>Please Select a Guild</h1>
        {guilds.map((guild) => (
          <div key={guild.id}>
            <GuildMenuItem guild={guild} />
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return fetchMutualGuilds(context);
}

export default MenuPage;
