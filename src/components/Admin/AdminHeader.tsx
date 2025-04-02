import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, CogIcon, UserIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { LogOutIcon } from 'lucide-react';

interface AdminHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function AdminHeader({ sidebarOpen, setSidebarOpen }: AdminHeaderProps) {
  const { user, signOut } = useAuth();
  const [notifications] = useState([
    { id: 1, text: 'New order received', read: false },
    { id: 2, text: 'Inventory low', read: true }
  ]);

  return (
    <header className="z-10 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Mobile menu button */}
        <button
          type="button"
          className="text-gray-500 md:hidden hover:text-gray-600"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className="sr-only">{sidebarOpen ? 'Close sidebar' : 'Open sidebar'}</span>
          {sidebarOpen ? (
            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          )}
        </button>

        <div className="flex items-center space-x-4">
          {/* Notifications dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none">
              <span className="sr-only">View notifications</span>
              <div className="relative">
                <BellIcon className="w-6 h-6" aria-hidden="true" />
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </div>
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-64 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-700">Notifications</p>
                </div>
                {notifications.map((notification) => (
                  <Menu.Item key={notification.id}>
                    {({ active }) => (
                      <div
                        className={`px-4 py-2 text-sm ${
                          active ? 'bg-gray-50' : ''
                        } ${
                          !notification.read ? 'font-semibold text-gray-900' : 'text-gray-600'
                        }`}
                      >
                        {notification.text}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>

          {/* User dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center max-w-xs space-x-2 rounded-full focus:outline-none">
              <span className="sr-only">Open user menu</span>
              <div className="flex items-center justify-center w-8 h-8 text-white bg-indigo-600 rounded-full">
                {user?.username?.charAt(0).toUpperCase() || <UserIcon className="w-5 h-5" />}
              </div>
              <span className="hidden text-sm font-medium text-gray-700 md:inline-block">
                {user?.username || 'Admin'}
              </span>
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`flex items-center px-4 py-2 text-sm ${
                        active ? 'bg-gray-100' : ''
                      } text-gray-700`}
                    >
                      <UserIcon className="w-4 h-4 mr-2" />
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`flex items-center px-4 py-2 text-sm ${
                        active ? 'bg-gray-100' : ''
                      } text-gray-700`}
                    >
                      <CogIcon className="w-4 h-4 mr-2" />
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <div className="border-t border-gray-100" />
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={signOut}
                      className={`w-full text-left flex items-center px-4 py-2 text-sm ${
                        active ? 'bg-gray-100' : ''
                      } text-gray-700`}
                    >
                      <LogOutIcon className="w-4 h-4 mr-2" />
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
}