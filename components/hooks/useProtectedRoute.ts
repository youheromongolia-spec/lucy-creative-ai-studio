'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/context/AuthContext';

export function useProtectedRoute(): boolean {
  const { isLoggedIn, isAuthLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthLoading && !isLoggedIn) {
      router.replace('/login');
    }
  }, [isLoggedIn, isAuthLoading, router]);

  return isLoggedIn;
}
