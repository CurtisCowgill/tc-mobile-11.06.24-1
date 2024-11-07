import { useState } from 'react';
import { Coffee, Clock } from 'lucide-react';

interface Break {
  id: number;
  type: 'lunch' | 'custom';
  startTime: string;
  duration: number;
  status: 'scheduled' | 'active' | 'completed';
}

function BreakManager() {
  const [breaks, setBreaks] = useState<Break[]>([
    {
      id: 1,
      type: 'lunch',
      startTime: '12:00 PM',
      duration: 30,
      status: 'scheduled',
    },
  ]);

  const [customBreakDuration, setCustomBreakDuration] = useState(15);

  const addCustomBreak = () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    
    setBreaks([
      ...breaks,
      {
        id: breaks.length + 1,
        type: 'custom',
        startTime: currentTime,
        duration: customBreakDuration,
        status: 'active',
      },
    ]);
  };

  const updateBreakStatus = (id: number, status: Break['status']) => {
    setBreaks(breaks.map(brk =>
      brk.id === id ? { ...brk, status } : brk
    ));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Break Management</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600">Duration:</label>
            <select
              value={customBreakDuration}
              onChange={(e) => setCustomBreakDuration(Number(e.target.value))}
              className="border border-gray-200 rounded-lg px-2 py-1"
            >
              <option value={15}>15 min</option>
              <option value={30}>30 min</option>
              <option value={45}>45 min</option>
            </select>
          </div>
          <button
            onClick={addCustomBreak}
            className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
          >
            Add Break
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {breaks.map((brk) => (
          <div
            key={brk.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Coffee className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="font-medium">
                  {brk.type === 'lunch' ? 'Lunch Break' : 'Custom Break'}
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock size={14} />
                  <span>{brk.startTime}</span>
                  <span>({brk.duration} min)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  brk.status === 'scheduled'
                    ? 'bg-yellow-100 text-yellow-800'
                    : brk.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {brk.status.charAt(0).toUpperCase() + brk.status.slice(1)}
              </span>
              {brk.status === 'scheduled' && (
                <button
                  onClick={() => updateBreakStatus(brk.id, 'active')}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                >
                  Start
                </button>
              )}
              {brk.status === 'active' && (
                <button
                  onClick={() => updateBreakStatus(brk.id, 'completed')}
                  className="px-3 py-1 bg-green-50 text-green-600 rounded-lg hover:bg-green-100"
                >
                  End
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BreakManager;