import { Users } from 'lucide-react';

interface WorkOrderCrewProps {
  crewName: string;
  memberCount: number;
  status: string;
}

function WorkOrderCrew({ crewName, memberCount, status }: WorkOrderCrewProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-4">Assigned Crew</h2>
      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
        <div className="flex items-center">
          <Users size={20} className="mr-3 text-gray-400" />
          <div>
            <h3 className="font-medium">{crewName}</h3>
            <p className="text-sm text-gray-600">{memberCount} members</p>
          </div>
        </div>
        <span className={`px-3 py-1 text-sm rounded-full ${
          status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {status}
        </span>
      </div>
    </div>
  );
}

export default WorkOrderCrew;