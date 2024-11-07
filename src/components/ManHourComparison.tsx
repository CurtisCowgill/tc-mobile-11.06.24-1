import React from 'react';
import { Users } from 'lucide-react';

interface ManHourComparisonProps {
  estimatedHours: number;
  actualHours: number;
  crewSize: number;
}

function ManHourComparison({ estimatedHours, actualHours, crewSize }: ManHourComparisonProps) {
  const variance = actualHours - estimatedHours;
  const variancePercent = ((variance / estimatedHours) * 100).toFixed(1);

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold">Man Hours</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Estimated</p>
          <p className="text-xl font-semibold">{estimatedHours}h</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Actual</p>
          <p className="text-xl font-semibold">{actualHours}h</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Crew Size</p>
          <p className="text-xl font-semibold">{crewSize}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Variance</p>
          <p className={`text-xl font-semibold ${variance > 0 ? 'text-red-600' : 'text-green-600'}`}>
            {variance > 0 ? '+' : ''}{variancePercent}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default ManHourComparison;