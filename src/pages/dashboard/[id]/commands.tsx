import { ReactElement } from 'react';
import { DashboardLayout } from '../../../components/layouts/dashboard';
import { NextPageWithLayout } from '../../../utils/types';

const CommandsPage: NextPageWithLayout = () => {
  return <div className="page">Commands Page</div>;
};

CommandsPage.getLayout = function (page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CommandsPage;
