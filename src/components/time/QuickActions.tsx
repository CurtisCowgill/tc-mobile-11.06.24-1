import { Clock, Coffee, AlertTriangle, Users } from 'lucide-react';

function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <button className="flex items-center justify-center space-x-2 p-4 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
        <Clock size={20} />
        <span>Bulk Clock-In</span>
      </button>
      <button className="flex items-center justify-center space-x-2 p-4 bg-green-50 text-green-600 rounded-lg hover:bg-green-100">
        <Coffee size={20} />
        <span>Start Break</span>
      </button>
      <button className="flex items-center justify-center space-x-2 p-4 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100">
        <Users size={20} />
        <span>Transfer Crew</span>
      </button>
      <button className="flex items-center justify-center space-x-2 p-4 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
        <AlertTriangle size={20} />
        <span>Report Issue</span>
      </button>
    </div>
  );
}

export default QuickActions;