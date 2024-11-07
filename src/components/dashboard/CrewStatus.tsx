import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';

function CrewStatus() {
  const crews = [
    {
      id: 1,
      name: 'Foundation Team Alpha',
      status: 'Available',
      members: 5,
      currentLocation: 'Downtown Project',
    },
    {
      id: 2,
      name: 'Wall Team Beta',
      status: 'On Site',
      members: 4,
      currentLocation: 'Riverside Complex',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-4">Crew Status</h2>
      <div className="space-y-4">
        {crews.map((crew) => (
          <Link
            key={crew.id}
            to={`/crews/${crew.id}`}
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="bg-blue-100 p-2 rounded-lg mr-4">
              <Users size={20} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{crew.name}</h3>
              <p className="text-sm text-gray-600">
                {crew.members} members · {crew.currentLocation}
              </p>
            </div>
            <span className={`ml-auto px-2 py-1 text-xs rounded-full ${
              crew.status === 'Available' 
                ? 'bg-green-100 text-green-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              {crew.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CrewStatus;