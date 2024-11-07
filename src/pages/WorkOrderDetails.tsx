import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Camera,
  FileText,
  Wrench
} from 'lucide-react';
import WorkOrderSchedule from '../components/WorkOrderSchedule';
import WorkOrderLocation from '../components/WorkOrderLocation';
import WorkOrderCrew from '../components/WorkOrderCrew';

function WorkOrderDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-6">
        <button className="text-gray-600 hover:text-gray-900">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-2xl font-bold">Footings Installation</h1>
          <p className="text-gray-600">Downtown Foundation Repair</p>
        </div>
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
          Pending
        </span>
      </div>

      <div className="flex space-x-4 mb-6">
        {[
          { icon: FileText, label: 'Details' },
          { icon: Users, label: 'Crew' },
          { icon: Wrench, label: 'Equipment' },
          { icon: Camera, label: 'Photos' },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === label.toLowerCase()
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab(label.toLowerCase())}
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <WorkOrderSchedule date="Mar 22, 2024" startTime="9:00 AM" endTime="4:00 PM" />
          <WorkOrderLocation address="3001 Cottonwood Ln, Rose Hill, KS 67133" />
          <WorkOrderCrew crewName="Foundation Team Alpha" memberCount={5} status="Available" />
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Details</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Inspection Time</label>
                <p className="font-medium">9:00 AM</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Pour Time</label>
                <p className="font-medium">10:30 AM</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Estimated CY</label>
                <p className="font-medium">45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkOrderDetails;