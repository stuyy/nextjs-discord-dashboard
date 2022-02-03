import { ReactElement } from 'react';

export function DashboardLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <nav>Hello, World! Hi</nav>
      <>{children}</>
    </>
  );
}
