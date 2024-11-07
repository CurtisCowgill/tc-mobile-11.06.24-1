import { CheckCircle, AlertCircle } from 'lucide-react';

interface StatusChecklistProps {
  items: Array<{
    label: string;
    completed: boolean;
  }>;
}

function StatusChecklist({ items }: StatusChecklistProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-4">Status</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center">
            {item.completed ? (
              <CheckCircle size={20} className="text-green-500" />
            ) : (
              <AlertCircle size={20} className="text-gray-300" />
            )}
            <span className="ml-3">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusChecklist;