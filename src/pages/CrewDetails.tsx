import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Users, Tool, Calendar, Clock } from 'lucide-react';
import Map from '../components/Map';

function CrewDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-6">
        <button className="text-gray-600 hover:text-gray-900">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold">Foundation Team Alpha</h1>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          Available
        </span>
      </div>

      <div className="flex space-x-4 mb-6">
        {[
          { icon: Users, label: 'Crew Info' },
          { icon: Tool, label: 'Equipment' },
          { icon: Calendar, label: 'Schedule' },
          { icon: Clock, label: 'Performance' },
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
            <h2 className="text-lg font-semibold mb-4">Team Members</h2>
            <div className="space-y-4">
              {[
                { name: 'John Smith', role: 'Crew Lead', experience: '8 years' },
                { name: 'Mike Johnson', role: 'Senior Technician', experience: '5 years' },
              ].map((member) => (
                <div
                  key={member.name}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                  <div className="text-sm text-gray-600">{member.experience}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Current Location</h2>
          <div className="h-[300px]">
            <Map center={[37.7749, -122.4194]} className="h-[300px] w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewDetails;