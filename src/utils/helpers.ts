import { GetServerSidePropsContext } from 'next';

export const validateCookies = (ctx: GetServerSidePropsContext) => {
  const sessionID = ctx.req.cookies['connect.sid'];
  return sessionID
    ? {
        Cookie: `connect.sid=${sessionID}`,
      }
    : false;
};
