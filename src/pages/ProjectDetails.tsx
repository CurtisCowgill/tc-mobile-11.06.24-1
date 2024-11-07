import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Tag,
  Home,
  FileText,
  Camera,
  Clock,
  DollarSign,
  Plus
} from 'lucide-react';
import Map from '../components/Map';

function ProjectDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-6">
        <button className="text-gray-600 hover:text-gray-900">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold">Downtown Foundation Repair</h1>
        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            urgent
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
            commercial
          </span>
          <button className="text-gray-600 hover:text-gray-900">
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="flex space-x-4 mb-6">
        {[
          { icon: Home, label: 'Overview' },
          { icon: FileText, label: 'Work Orders' },
          { icon: FileText, label: 'Plans & Docs' },
          { icon: Camera, label: 'Photos' },
          { icon: Clock, label: 'Time' },
          { icon: DollarSign, label: 'Financial' },
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
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Location</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Customer</label>
                <p className="font-medium">Nies Homes</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Neighborhood</label>
                <p className="font-medium">Sienna Ranch</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Address</label>
                <p className="font-medium">3001 Cottonwood Ln</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">City</label>
                <p className="font-medium">Rose Hill</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Work Orders</h2>
            <div className="space-y-4">
              {[
                { title: 'Site Visit / Stake Out', date: 'Mar 20, 2024', team: 'Survey Team' },
                { title: 'Footings', date: 'Mar 22, 2024', team: 'Foundation Team' },
                { title: 'Walls', date: 'Mar 25, 2024', team: 'Wall Team' },
              ].map((order) => (
                <div
                  key={order.title}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{order.title}</h3>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                  <div className="text-sm text-gray-600">{order.team}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-[400px]">
          <Map center={[37.7749, -122.4194]} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;