interface TimeEntryProps {
  workOrder: string;
  startTime: string;
  endTime: string;
  duration: string;
  status: 'active' | 'completed' | 'paused';
}

function TimeEntry({ workOrder, startTime, endTime, duration, status }: TimeEntryProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{workOrder}</h3>
          <div className="text-sm text-gray-600 mt-1">
            {startTime} - {endTime}
          </div>
        </div>
        <div className="text-right">
          <span className="font-medium">{duration}</span>
          <span className={`block mt-1 text-sm px-2 py-1 rounded-full ${
            status === 'active'
              ? 'bg-green-100 text-green-800'
              : status === 'paused'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TimeEntry;