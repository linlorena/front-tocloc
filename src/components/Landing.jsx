import { Outlet } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex cursor-crosshair flex-col flex-1 h-full">
      <div className="flex flex-col flex-1">
        <main className="flex-1 overflow-hidden p-4">
          <div className="rounded-lg bg-white shadow p-6 dark:bg-gray-900 h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Landing;
