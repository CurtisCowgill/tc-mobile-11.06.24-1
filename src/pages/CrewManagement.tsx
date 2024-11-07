import { useState } from 'react';
import { Users, Truck, Wrench } from 'lucide-react';

interface CrewMember {
  id: number;
  name: string;
  role: string;
  phone: string;
}

interface Equipment {
  id: number;
  name: string;
  type: string;
  status: string;
}

interface Vehicle {
  id: number;
  type: string;
  number: string;
  status: string;
}

function CrewManagement() {
  const crewMembers: CrewMember[] = [
    { id: 1, name: 'John Smith', role: 'Foreman', phone: '316-555-0101' },
    { id: 2, name: 'Mike Johnson', role: 'Assistant Foreman', phone: '316-555-0102' },
    { id: 3, name: 'Dave Wilson', role: 'Crew Member', phone: '316-555-0103' },
    { id: 4, name: 'Steve Brown', role: 'Crew Member', phone: '316-555-0104' },
  ];

  const equipment: Equipment[] = [
    { id: 1, name: 'Concrete Pump', type: 'Heavy Equipment', status: 'In Use' },
    { id: 2, name: 'Laser Level', type: 'Tool', status: 'Available' },
    { id: 3, name: 'Power Trowel', type: 'Power Tool', status: 'Maintenance' },
  ];

  const vehicles: Vehicle[] = [
    { id: 1, type: 'Ford F-350', number: 'TC-101', status: 'In Use' },
    { id: 2, type: 'Equipment Trailer', number: 'TC-201', status: 'In Use' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Foundation Team Alpha</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Crew Members */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Crew Members</h2>
            <button className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
              Add Member
            </button>
          </div>
          <div className="space-y-3">
            {crewMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
                <p className="text-sm text-gray-600">{member.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Equipment</h2>
            <button className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
              Add Equipment
            </button>
          </div>
          <div className="space-y-3">
            {equipment.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div className="flex items-center">
                  <Wrench size={20} className="text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.type}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  item.status === 'Available' 
                    ? 'bg-green-100 text-green-800'
                    : item.status === 'In Use'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicles */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Vehicles</h2>
            <button className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
              Add Vehicle
            </button>
          </div>
          <div className="space-y-3">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div className="flex items-center">
                  <Truck size={20} className="text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium">{vehicle.type}</p>
                    <p className="text-sm text-gray-600">Unit: {vehicle.number}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  vehicle.status === 'Available' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {vehicle.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewManagement;