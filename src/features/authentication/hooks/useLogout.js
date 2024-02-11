import { logout as logoutApi } from '../../../services/apiAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // remove the user data from the cache
      queryClient.removeQueries();

      // navigate to the login page, replacing the current location from the history
      navigate('/login', { replace: true });
    },
    onError: () => {
      toast.error('Could not log out');
    }
  });

  return { logout, isLoading };
}
