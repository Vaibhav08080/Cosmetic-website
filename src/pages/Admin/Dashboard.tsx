import { useAuth } from '../../contexts/AuthContext';

export default function AdminDashboard() {
  const { user } = useAuth();
  
  return (
    <div>
      <h1>Welcome, Admin {user?.username}</h1>
      {/* Admin content here */}
    </div>
  );
}