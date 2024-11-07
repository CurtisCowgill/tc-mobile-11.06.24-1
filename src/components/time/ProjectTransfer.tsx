import { useState } from 'react';
import { ArrowRightLeft, Users } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  location: string;
}

interface CrewMember {
  id: number;
  name: string;
  role: string;
  currentProject: number;
}

function ProjectTransfer() {
  const [projects] = useState<Project[]>([
    { id: 1, name: 'Downtown Foundation', location: '123 Main St' },
    { id: 2, name: 'Riverside Complex', location: '456 River Rd' },
  ]);

  const [crewMembers, setCrewMembers] = useState<CrewMember[]>([
    { id: 1, name: 'John Smith', role: 'Foreman', currentProject: 1 },
    { id: 2, name: 'Mike Johnson', role: 'Assistant Foreman', currentProject: 1 },
    { id: 3, name: 'Dave Wilson', role: 'Crew Member', currentProject: 1 },
  ]);

  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [targetProject, setTargetProject] = useState<number>(2);

  const toggleMemberSelection = (id: number) => {
    setSelectedMembers(current =>
      current.includes(id)
        ? current.filter(memberId => memberId !== id)
        : [...current, id]
    );
  };

  const transferMembers = () => {
    setCrewMembers(members =>
      members.map(member =>
        selectedMembers.includes(member.id)
          ? { ...member, currentProject: targetProject }
          : member
      )
    );
    setSelectedMembers([]);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Project Transfers</h2>
        <div className="flex items-center space-x-4">
          <select
            value={targetProject}
            onChange={(e) => setTargetProject(Number(e.target.value))}
            className="border border-gray-200 rounded-lg px-3 py-2"
          >
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
          <button
            onClick={transferMembers}
            disabled={selectedMembers.length === 0}
            className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 disabled:opacity-50"
          >
            Transfer Selected
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="space-y-2">
            <h3 className="font-medium text-gray-900">{project.name}</h3>
            <div className="space-y-2">
              {crewMembers
                .filter((member) => member.currentProject === project.id)
                .map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(member.id)}
                        onChange={() => toggleMemberSelection(member.id)}
                        className="h-4 w-4 text-blue-600 rounded border-gray-300"
                      />
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">{project.location}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTransfer;