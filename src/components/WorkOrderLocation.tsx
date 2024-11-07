import { MapPin } from 'lucide-react';

interface WorkOrderLocationProps {
  address: string;
}

function WorkOrderLocation({ address }: WorkOrderLocationProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-4">Location</h2>
      <div className="flex items-center">
        <MapPin size={16} className="mr-2 text-gray-400" />
        <span>{address}</span>
      </div>
    </div>
  );
}

export default WorkOrderLocation;