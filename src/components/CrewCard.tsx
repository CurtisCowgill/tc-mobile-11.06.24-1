import { Users, MapPin, Wrench } from 'lucide-react';

interface CrewCardProps {
  crew: {
    id: number;
    name: string;
    members: number;
    currentLocation: string;
    status: string;
    currentTask: string;
  };
}

function CrewCard({ crew }: CrewCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-semibold">{crew.name}</h2>
        <span className={`px-2 py-1 text-sm rounded-full ${
          crew.status === 'Active' 
            ? 'bg-green-100 text-green-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {crew.status}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Users size={16} className="mr-2" />
          <span>{crew.members} Members</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin size={16} className="mr-2" />
          <span>{crew.currentLocation}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Wrench size={16} className="mr-2" />
          <span>{crew.currentTask}</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button className="px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
          View Details
        </button>
        <button className="px-3 py-2 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100">
          Reassign
        </button>
      </div>
    </div>
  );
}

export default CrewCard;