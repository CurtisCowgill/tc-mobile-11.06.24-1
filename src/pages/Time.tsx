import { useState } from 'react';
import QuickActions from '../components/time/QuickActions';
import CrewTimesheet from '../components/time/CrewTimesheet';

function Time() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Crew Time Management</h1>
        <p className="text-gray-600">Foundation Team Alpha</p>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Main Content */}
      <CrewTimesheet />
    </div>
  );
}

export default Time;