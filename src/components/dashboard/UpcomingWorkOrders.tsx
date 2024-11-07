import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function UpcomingWorkOrders() {
  const workOrders = [
    {
      id: 1,
      title: 'Site Visit / Stake Out',
      project: 'Downtown Foundation Repair',
      date: 'Mar 20, 2024',
      team: 'Survey Team',
    },
    {
      id: 2,
      title: 'Footings',
      project: 'Riverside Complex',
      date: 'Mar 22, 2024',
      team: 'Foundation Team',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming Work Orders</h2>
        <Link
          to="/work-orders"
          className="text-blue-600 hover:text-blue-700 text-sm flex items-center"
        >
          View All
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      <div className="space-y-4">
        {workOrders.map((order) => (
          <div
            key={order.id}
            className="p-4 border border-gray-200 rounded-lg"
          >
            <h3 className="font-medium text-gray-900">{order.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{order.project}</p>
            <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
              <span>{order.date}</span>
              <span>{order.team}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingWorkOrders;