import { GetServerSidePropsContext, NextPage } from 'next';
import { fetchMutualGuilds } from '../../utils/api';

const MenuPage: NextPage = () => <div>MenuPage</div>;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return fetchMutualGuilds(context);
}

export default MenuPage;
