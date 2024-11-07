import { Calendar, Clock } from 'lucide-react';

interface WorkOrderScheduleProps {
  date: string;
  startTime: string;
  endTime: string;
}

function WorkOrderSchedule({ date, startTime, endTime }: WorkOrderScheduleProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-4">Schedule</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600">Date</label>
          <div className="flex items-center mt-1">
            <Calendar size={16} className="mr-2 text-gray-400" />
            <span>{date}</span>
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-600">Time</label>
          <div className="flex items-center mt-1">
            <Clock size={16} className="mr-2 text-gray-400" />
            <span>{startTime} - {endTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkOrderSchedule;