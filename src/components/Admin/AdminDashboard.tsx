import { useEffect, useState } from 'react';
import StatsCard from './StatsCard';
import { CurrencyIcon, BoxIcon, UsersIcon } from 'lucide-react';

interface DashboardStats {
  totalSales: number;
  productCount: number;
  userCount: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/dashboard');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
        <StatsCard 
          title="Total Sales" 
          value={`$${stats?.totalSales.toLocaleString() || 0}`} 
          icon={<CurrencyIcon />}
        />
        <StatsCard 
          title="Products" 
          value={stats?.productCount || 0} 
          icon={<BoxIcon />}
        />
        <StatsCard 
          title="Users" 
          value={stats?.userCount || 0} 
          icon={<UsersIcon />}
        />
      </div>

      {/* Add charts/other components here */}
    </div>
  );
}