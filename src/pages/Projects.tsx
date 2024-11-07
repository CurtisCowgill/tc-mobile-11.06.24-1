import { useState } from 'react';
import { 
  Search,
  Plus,
  Building2,
  MapPin,
  Calendar,
  Users
} from 'lucide-react';

function Projects() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={20} />
          <span>New Project</span>
        </button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: 'Downtown Foundation Repair',
            customer: 'Nies Homes',
            location: 'Rose Hill, KS',
            status: 'In Progress',
            crew: 'Foundation Team Alpha',
          },
          {
            name: 'Residential Foundation',
            customer: 'Smith Construction',
            location: 'Wichita, KS',
            status: 'Scheduled',
            crew: 'Foundation Team Beta',
          },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold">{project.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                project.status === 'In Progress'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Building2 size={16} className="mr-2" />
                <span>{project.customer}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-2" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users size={16} className="mr-2" />
                <span>{project.crew}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;