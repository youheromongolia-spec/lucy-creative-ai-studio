'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  isAuthLoading: boolean;
  userName: string | null;
  login: (name: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [userName, setUserName] = useState<string | null>(null);

  const refreshSession = async () => {
    setIsAuthLoading(true);
    try {
      const response = await fetch('/api/auth/session', { method: 'GET' });
      const data = (await response.json()) as {
        isLoggedIn?: boolean;
        user?: { name?: string } | null;
      };
      setIsLoggedIn(Boolean(data.isLoggedIn));
      setUserName(data.user?.name ?? null);
    } catch {
      setIsLoggedIn(false);
      setUserName(null);
    } finally {
      setIsAuthLoading(false);
    }
  };

  useEffect(() => {
    void refreshSession();
  }, []);

  const login = async (name: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    const data = (await response.json()) as { error?: string; user?: { name?: string } };
    if (!response.ok) throw new Error(data.error ?? 'Нэвтрэхэд алдаа гарлаа.');
    setIsLoggedIn(true);
    setUserName(data.user?.name ?? name);
  };

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setIsLoggedIn(false);
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAuthLoading, userName, login, logout, refreshSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
