// src/routes/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Admin } from '../models/Admin';  // 

interface PrivateRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

export const PrivateRoute = ({ children, adminOnly = false }: PrivateRouteProps) => {
  const { user, loading } = useAuth();

  
  if (loading) {
    return <div>Loading...</div>;
  }


  if (!user) {
    return <Navigate to="/login" replace />;
  }


  if (adminOnly) {
   
    if (user.role !== 'admin') {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};
