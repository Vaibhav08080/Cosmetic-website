import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard,
  Package,
  Users,
  Settings,
  ShoppingCart
} from 'lucide-react';

interface MenuItem {
  path: string;
  icon: JSX.Element;
  label: string;
}

export default function AdminSidebar() {
  const menuItems: MenuItem[] = [
    {
      path: '/admin/dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: 'Dashboard'
    },
    {
      path: '/admin/products',
      icon: <Package className="w-5 h-5" />,
      label: 'Products'
    },
    {
      path: '/admin/users',
      icon: <Users className="w-5 h-5" />,
      label: 'Users'
    },
    {
      path: '/admin/orders',
      icon: <ShoppingCart className="w-5 h-5" />,
      label: 'Orders'
    },
    {
      path: '/admin/settings',
      icon: <Settings className="w-5 h-5" />,
      label: 'Settings'
    }
  ];

  return (
    <div className="w-64 p-4 text-white bg-gray-800">
      <h2 className="mb-6 text-xl font-bold">Admin Panel</h2>
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-3 mb-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-indigo-600 text-white' 
                  : 'hover:bg-gray-700 text-gray-300'
              }`
            }
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}