import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { 
  ChevronDown,
  ChevronUp,
  LayoutDashboard, 
  Users, 
  Settings, 
  HelpCircle,
  Lock,
  Globe,
  Plus,
  Pin,
  LogOut,
  User
} from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isPinned, setIsPinned] = useState(false);
  const [isDashboardsExpanded, setIsDashboardsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const isExpanded = isPinned || isHovered;

  const dashboards = [
    { label: 'Marketing Overview', isPrivate: true, route: '/dashboard' },
    { label: 'Sales Analytics', isPrivate: false, route: '/dashboard' },
  ];

  const mainMenuItems = [
    { icon: Users, label: 'Team' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white shadow-sm flex items-center justify-between px-6 z-50">
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-3">
            <div className="h-8">
              <img 
                src="/images/logo/whagons-logo.png" 
                alt="Whagons Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Whagons
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-slate-600">John Doe</span>
          <Menu as="div" className="relative">
            <Menu.Button className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white flex items-center justify-center font-medium hover:opacity-90 transition-opacity">
              JD
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => navigate('/profile')}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => navigate('/help')}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                    >
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Help
                    </button>
                  )}
                </Menu.Item>
                <div className="h-px bg-gray-200 my-1" />
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => console.log('Sign out clicked')}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } flex items-center w-full px-4 py-2 text-sm text-red-600`}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>

      {/* Rest of the component remains exactly the same */}
      <aside 
        className={`fixed left-0 top-20 bottom-16 bg-slate-900 transition-all duration-300 flex flex-col
                   ${isExpanded ? 'w-72' : 'w-20'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          onClick={() => setIsPinned(!isPinned)}
          className={`absolute right-4 top-4 p-2 rounded-full transition-all duration-300
                     ${isPinned 
                       ? 'bg-indigo-500 text-white' 
                       : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
        >
          <Pin size={16} className={isPinned ? 'rotate-45' : ''} />
        </button>

        <nav className="flex-1 mt-8 overflow-hidden">
          {isExpanded && (
            <div className="mb-4">
              <div className="px-4 mb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-200 font-medium">
                    <LayoutDashboard size={20} className="text-indigo-400" />
                    <span className="ml-4">Dashboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-slate-800 rounded-full text-slate-400 hover:text-slate-200 transition-colors">
                      <Plus size={16} />
                    </button>
                    <button 
                      onClick={() => setIsDashboardsExpanded(!isDashboardsExpanded)}
                      className="p-1.5 hover:bg-slate-800 rounded-full text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      {isDashboardsExpanded ? 
                        <ChevronUp size={16} /> : 
                        <ChevronDown size={16} />
                      }
                    </button>
                  </div>
                </div>
              </div>

              {isDashboardsExpanded && (
                <div className="ml-8 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                  {dashboards.map((dashboard, index) => (
                    <div 
                      key={index}
                      onClick={() => navigate(dashboard.route)}
                      className="flex items-center py-2 px-4 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer rounded-lg mx-2 transition-colors duration-200"
                    >
                      {dashboard.isPrivate ? 
                        <Lock size={14} className="text-slate-500 mr-2" /> : 
                        <Globe size={14} className="text-slate-500 mr-2" />
                      }
                      <span className="truncate">{dashboard.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {mainMenuItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center px-6 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer transition-colors duration-200"
            >
              <item.icon size={20} className="text-indigo-400" />
              {isExpanded && (
                <span className="ml-4">{item.label}</span>
              )}
            </div>
          ))}
        </nav>

        <div className="px-6 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer flex items-center transition-colors duration-200"
         onClick={() => navigate('/settings')}
        >
          <Settings size={20} className="text-indigo-400" />
          {isExpanded && <span className="ml-4">Settings</span>}
         
        </div>

        <div className="mt-auto mb-4 px-6 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer flex items-center transition-colors duration-200">
          <HelpCircle size={20} className="text-indigo-400" />
          {isExpanded && <span className="ml-4">Help</span>}
        </div>
      </aside>

      <main className={`pt-20 pb-16 transition-all duration-300 ${isExpanded ? 'ml-72' : 'ml-20'}`}>
        <div className="p-8">
          {children}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 h-16 bg-white shadow-sm flex items-center justify-center text-sm text-slate-600">
        <p>© 2024 Whagons 5. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;