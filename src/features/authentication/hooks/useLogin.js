import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // set the user data in the cache
      console.log('USER', user);
      queryClient.setQueryData(['user'], user.user);

      // navigate to the dashboard, replacing the current location from the history
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided email or password are incorrect');
    }
  });

  return { login, isLoading };
}
