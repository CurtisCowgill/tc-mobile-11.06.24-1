import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  count: number;
  icon: LucideIcon;
  color: string;
}

function StatsCard({ title, count, icon: Icon, color }: StatsCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm text-gray-600">{title}</h3>
          <p className="text-2xl font-bold mt-1">{count}</p>
        </div>
        <div className={`${color} p-2 rounded-lg text-white`}>
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

export default StatsCard;