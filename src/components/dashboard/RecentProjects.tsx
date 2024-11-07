import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function RecentProjects() {
  const projects = [
    {
      id: 1,
      name: 'Downtown Foundation Repair',
      customer: 'Nies Homes',
      status: 'In Progress',
      type: 'Commercial',
    },
    {
      id: 2,
      name: 'Riverside Complex',
      customer: 'Metro Development',
      status: 'Scheduled',
      type: 'Residential',
    },
    {
      id: 3,
      name: 'Highland Park Houses',
      customer: 'Highland Builders',
      status: 'In Progress',
      type: 'Residential',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Projects</h2>
        <Link
          to="/projects"
          className="text-blue-600 hover:text-blue-700 text-sm flex items-center"
        >
          View All
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.customer}</p>
              </div>
              <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                {project.type}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;