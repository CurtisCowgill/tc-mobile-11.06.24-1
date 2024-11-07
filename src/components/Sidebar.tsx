import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar,
  Users,
  Clock,
  ShieldCheck,
  Settings,
  LogOut,
  Sun
} from 'lucide-react';

const navItems = [
  { icon: Sun, label: 'Today', path: '/' },
  { icon: Calendar, label: 'Schedule', path: '/schedule' },
  { icon: Users, label: 'Crew', path: '/crew' },
  { icon: Clock, label: 'Time', path: '/time' },
  { icon: ShieldCheck, label: 'Safety', path: '/safety' },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">True Concrete</h1>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map(({ icon: Icon, label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Link
          to="/settings"
          className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>
        <button className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg w-full mt-2">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;