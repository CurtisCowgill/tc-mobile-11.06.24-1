import { Link } from 'react-router-dom';
import { Clock, Camera, CheckCircle, AlertCircle } from 'lucide-react';
import Map from '../components/Map';
import CrewTimesheet from '../components/time/CrewTimesheet';

function Today() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Critical Times Banner - Always visible */}
      <div className="sticky top-0 z-10 bg-white shadow-lg rounded-lg mb-6 p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center">
              <Clock className="text-blue-600 mr-2" size={24} />
              <div>
                <h3 className="font-bold text-blue-800">Next Inspection</h3>
                <p className="text-xl font-bold text-blue-900">9:00 AM</p>
              </div>
            </div>
            <span className="text-blue-800">10626 Glengate Cir</span>
          </div>

          <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
            <div className="flex items-center">
              <Clock className="text-green-600 mr-2" size={24} />
              <div>
                <h3 className="font-bold text-green-800">Next Pour</h3>
                <p className="text-xl font-bold text-green-900">10:30 AM</p>
              </div>
            </div>
            <span className="text-green-800">10626 Glengate Cir</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm">
          <Camera size={24} className="mr-2" />
          <span className="text-lg font-semibold">Upload Photos</span>
        </button>
        <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-sm">
          <CheckCircle size={24} className="mr-2" />
          <span className="text-lg font-semibold">Complete Work Order</span>
        </button>
        <button className="flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 shadow-sm">
          <Clock size={24} className="mr-2" />
          <span className="text-lg font-semibold">Crew Time</span>
        </button>
        <button className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-sm">
          <AlertCircle size={24} className="mr-2" />
          <span className="text-lg font-semibold">Report Issue</span>
        </button>
      </div>

      {/* Active Work Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Today's Work Orders</h2>
          <div className="space-y-4">
            {[
              {
                id: '19318562',
                address: '10626 Glengate Cir',
                type: 'Footings',
                status: 'Ready to Start',
                inspection: '9:00 AM',
                pour: '10:30 AM',
                cy: '45',
                progress: 0
              },
              {
                id: '19318563',
                address: '12755 E Canongate',
                type: 'Walls',
                status: 'In Progress',
                inspection: '2:00 PM',
                pour: '3:30 PM',
                cy: '65',
                progress: 30
              }
            ].map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg border border-gray-200 p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold">{order.address}</h3>
                    <p className="text-xl font-bold text-blue-600">{order.type}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 text-lg rounded-full font-bold ${
                      order.status === 'Ready to Start' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 text-lg">
                  <div>
                    <span className="text-gray-600">Inspection:</span>
                    <span className="ml-2 font-bold">{order.inspection}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Pour:</span>
                    <span className="ml-2 font-bold">{order.pour}</span>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 text-lg font-bold">
                    Photos
                  </button>
                  <button className="flex-1 py-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 text-lg font-bold">
                    Complete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map View */}
        <div>
          <h2 className="text-xl font-bold mb-4">Project Locations</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="h-[400px]">
              <Map center={[37.6872, -97.3301]} zoom={11} />
            </div>
          </div>
        </div>
      </div>

      {/* Crew Timesheet */}
      <div>
        <h2 className="text-xl font-bold mb-4">Crew Time</h2>
        <CrewTimesheet />
      </div>
    </div>
  );
}

export default Today;