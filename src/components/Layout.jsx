const Layout = ({ children }) => {
  return (
    <div className="flex h-screen cursor-crosshair rounded-full">
      <div className="flex flex-col flex-1">
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <div className="rounded-lg bg-white shadow p-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
