import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search,
  Plus,
  Calendar,
  Clock,
  Users,
  Wrench
} from 'lucide-react';

function WorkOrders() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Work Orders</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={20} />
          <span>New Work Order</span>
        </button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search work orders..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-6 gap-4 p-4 border-b border-gray-200 text-sm font-medium text-gray-600">
          <div className="col-span-2">Work Order</div>
          <div>Date</div>
          <div>Time</div>
          <div>Crew</div>
          <div>Status</div>
        </div>
        {[
          {
            id: '1',
            name: 'Footings Installation',
            project: 'Downtown Foundation Repair',
            date: 'Mar 22, 2024',
            time: '9:00 AM',
            crew: 'Foundation Team Alpha',
            status: 'Pending',
          },
          {
            id: '2',
            name: 'Wall Installation',
            project: 'Residential Foundation',
            date: 'Mar 23, 2024',
            time: '10:00 AM',
            crew: 'Foundation Team Beta',
            status: 'Scheduled',
          },
        ].map((order) => (
          <Link
            key={order.id}
            to={`/work-orders/${order.id}`}
            className="grid grid-cols-6 gap-4 p-4 border-b border-gray-200 hover:bg-gray-50"
          >
            <div className="col-span-2">
              <p className="font-medium">{order.name}</p>
              <p className="text-sm text-gray-600">{order.project}</p>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-gray-400" />
              {order.date}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2 text-gray-400" />
              {order.time}
            </div>
            <div className="flex items-center">
              <Users size={16} className="mr-2 text-gray-400" />
              {order.crew}
            </div>
            <div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                order.status === 'Pending'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {order.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default WorkOrders;