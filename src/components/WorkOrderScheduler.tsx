import React from 'react';
import { Calendar } from 'lucide-react';

interface WorkOrderSchedulerProps {
  workOrderId: string | undefined;
}

function WorkOrderScheduler({ workOrderId }: WorkOrderSchedulerProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold">Schedule</h3>
        </div>
        <button className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
          Reschedule
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Start Date</span>
          <span className="font-semibold">Mar 15, 2024</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">End Date</span>
          <span className="font-semibold">Mar 16, 2024</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Duration</span>
          <span className="font-semibold">2 days</span>
        </div>
      </div>
    </div>
  );
}

export default WorkOrderScheduler;