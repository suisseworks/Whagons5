import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple Header */}
      <header className="bg-white border-b p-4">
        <h1 className="text-xl font-bold">Whagons 5</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t p-4 text-center text-gray-600">
        <p>© 2024 Whagons 5. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;