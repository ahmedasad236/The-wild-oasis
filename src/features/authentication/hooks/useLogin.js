import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginAPI } from '../../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      // set the user data in the cache
      queryClient.setQueryData(['user'], user);

      // show a success message
      toast.success('Welcome back!');

      // navigate to the dashboard, replacing the current location from the history
      navigate('/dashboard', { replace: true });
    },
    onError: (err) =>
      toast.error(
        'Provided email or password is not correct. Please try again.'
      )
  });

  return { login, isLoading };
}
