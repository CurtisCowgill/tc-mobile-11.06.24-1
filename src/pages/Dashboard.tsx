import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock,
  MapPin,
  Calendar,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import Map from '../components/Map';

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Critical Times Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Today's Critical Times</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center mb-2">
              <Clock className="text-blue-600 mr-2" size={20} />
              <h3 className="font-medium text-blue-800">Inspections</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-blue-900">10626 Glengate Cir</span>
                <span className="font-medium text-blue-900">9:00 AM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-900">12755 E Canongate</span>
                <span className="font-medium text-blue-900">2:00 PM</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center mb-2">
              <Clock className="text-green-600 mr-2" size={20} />
              <h3 className="font-medium text-green-800">Pour Times</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-green-900">10626 Glengate Cir</span>
                <span className="font-medium text-green-900">10:30 AM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-900">12755 E Canongate</span>
                <span className="font-medium text-green-900">3:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Work Orders */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Today's Work Orders</h2>
          <Link to="/schedule" className="text-blue-600 text-sm flex items-center">
            View Schedule
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="space-y-4">
          {[
            {
              id: '19318562',
              address: '10626 Glengate Cir',
              city: 'Wichita',
              type: 'Footings',
              status: 'Ready to Start',
              inspection: '9:00 AM',
              pour: '10:30 AM',
              cy: '45'
            },
            {
              id: '19318563',
              address: '12755 E Canongate',
              city: 'Wichita',
              type: 'Walls',
              status: 'Pending Inspection',
              inspection: '2:00 PM',
              pour: '3:30 PM',
              cy: '65'
            }
          ].map((order) => (
            <Link
              key={order.id}
              to={`/work-orders/${order.id}`}
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{order.address}</h3>
                  <p className="text-sm text-gray-600">{order.city}</p>
                </div>
                <span className={`px-2 py-1 text-sm rounded-full ${
                  order.status === 'Ready to Start' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                <div>
                  <label className="text-gray-600">Type</label>
                  <p className="font-medium">{order.type}</p>
                </div>
                <div>
                  <label className="text-gray-600">Est. CY</label>
                  <p className="font-medium">{order.cy}</p>
                </div>
                <div>
                  <label className="text-gray-600">Inspection</label>
                  <p className="font-medium">{order.inspection}</p>
                </div>
                <div>
                  <label className="text-gray-600">Pour</label>
                  <p className="font-medium">{order.pour}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Project Locations */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Project Locations</h2>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="h-[300px]">
            <Map center={[37.6872, -97.3301]} zoom={11} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;