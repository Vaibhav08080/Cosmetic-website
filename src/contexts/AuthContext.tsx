import React, { createContext, useContext, useEffect, useState } from 'react';
import { login, register } from '../services/api';
import type { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if there's a stored token and validate it
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token and set user
      // You'll need to implement this API endpoint
      fetch('/api/auth/validate', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(data => setUser(data.user))
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    const { token, user } = await login(email, password);
    localStorage.setItem('token', token);
    setUser(user);
  };

  const signUp = async (email: string, password: string) => {
    const { token, user } = await register(email, password);
    localStorage.setItem('token', token);
    setUser(user);
  };

  const signOut = async () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};