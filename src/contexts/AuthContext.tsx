import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  email: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        setLoading(true);
        
        // Check for existing session
        const { data: { session } } = await supabase.auth.getSession();
        const token = localStorage.getItem('token');

        if (session && token) {
          // Verify token with your backend
          const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/profile`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            await supabase.auth.signOut();
            localStorage.removeItem('token');
          }
        }
      } catch (err) {
        console.error('Auth initialization error:', err);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        const token = localStorage.getItem('token');
        if (!token) {
          // New sign in - get backend token
          await handleSupabaseAuth(session.access_token);
        }
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        localStorage.removeItem('token');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSupabaseAuth = async (supabaseToken: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/supabase-auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseToken}`
        }
      });

      if (!response.ok) throw new Error('Failed to authenticate with backend');

      const { token, user: userData } = await response.json();
      localStorage.setItem('token', token);
      setUser(userData);
      setError(null);
      return userData;
    } catch (err) {
      console.error('Authentication error:', err);
      setError(err instanceof Error ? err.message : 'Authentication failed');
      throw err;
    }
  };

  const signUp = async (email: string, password: string, username: string) => {
    try {
      setLoading(true);
      setError(null);

      // 1. Sign up with Supabase
      const { data: supabaseData, error: supabaseError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username
          }
        }
      });

      if (supabaseError) throw supabaseError;
      if (!supabaseData.session) throw new Error('Email confirmation required');

      // 2. Authenticate with your backend
      const userData = await handleSupabaseAuth(supabaseData.session.access_token);
      
      // 3. Redirect after successful registration
      navigate('/');
      return userData;
    } catch (err) {
      console.error('Sign up error:', err);
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      // 1. Sign in with Supabase
      const { data: supabaseData, error: supabaseError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (supabaseError) throw supabaseError;
      if (!supabaseData.session) throw new Error('Authentication failed');

      // 2. Authenticate with your backend
      const userData = await handleSupabaseAuth(supabaseData.session.access_token);
      
      // 3. Redirect after successful login
      navigate('/');
      return userData;
    } catch (err) {
      console.error('Sign in error:', err);
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      localStorage.removeItem('token');
      setUser(null);
      navigate('/login');
    } catch (err) {
      console.error('Sign out error:', err);
      setError(err instanceof Error ? err.message : 'Logout failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};