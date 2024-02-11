import { useMutation } from '@tanstack/react-query';
import { login as loginAPI } from '../../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: () => {
      toast.success('Welcome back!');
      navigate('/dashboard');
    },
    onError: (err) =>
      toast.error(
        'Provided email or password is not correct. Please try again.'
      )
  });

  return { login, isLoading };
}
