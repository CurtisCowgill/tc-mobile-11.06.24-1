import React, { useState } from 'react';
import { Clock, Play, Pause, StopCircle } from 'lucide-react';

interface TimeTrackerProps {
  workOrderId: string | undefined;
}

function TimeTracker({ workOrderId }: TimeTrackerProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold">Time Tracker</h3>
        </div>
        <span className="text-2xl font-mono">{formatTime(elapsedTime)}</span>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`p-2 rounded-full ${
            isRunning ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
          }`}
        >
          {isRunning ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setElapsedTime(0);
          }}
          className="p-2 rounded-full bg-gray-100 text-gray-600"
        >
          <StopCircle size={20} />
        </button>
      </div>
    </div>
  );
}

export default TimeTracker;