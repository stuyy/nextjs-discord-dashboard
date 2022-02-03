import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { validateCookies } from './helpers';
import { Guild } from './types';

const API_URL = 'http://localhost:3001/api';

export const fetchMutualGuilds = async (context: GetServerSidePropsContext) => {
  const headers = validateCookies(context);
  if (!headers) return { redirect: { destination: '/' } };
  try {
    const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, {
      headers,
    });
    console.log(guilds);
    return { props: { guilds } };
  } catch (err) {
    console.log(err);
    return { redirect: { destination: '/' } };
  }
};
