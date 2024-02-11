import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../../services/apiAuth';

export function useUser() {
  const {
    data: user,
    error,
    isLoading
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser
  });

  return {
    user,
    error,
    isLoading,
    isAuthenticated: user?.role === 'authenticated'
  };
}
