import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: 'up' | 'down';
}

export default function StatsCard({ 
  title, 
  value, 
  icon,
  trend 
}: StatsCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="mt-1 text-2xl font-bold">{value}</h3>
        </div>
        <div className="p-3 text-indigo-600 bg-indigo-100 rounded-full">
          {icon}
        </div>
      </div>
      {trend && (
        <div className={`mt-2 text-sm ${
          trend === 'up' ? 'text-green-500' : 'text-red-500'
        }`}>
          {trend === 'up' ? '↑' : '↓'} 12% from last month
        </div>
      )}
    </div>
  );
}