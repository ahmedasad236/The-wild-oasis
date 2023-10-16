import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateSetting as updateSettingsAPI } from '../../../services/apiSettings';

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateSettings } = useMutation({
    mutationFn: updateSettingsAPI,
    onSuccess: () => {
      toast.success('Settings was updated successfully');
      queryClient.invalidateQueries({
        queryKey: ['settings']
      });
    },
    onError: (err) => toast.error(err.message)
  });

  return { isUpdating, updateSettings };
}
