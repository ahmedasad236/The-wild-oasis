import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin as deleteCabinAPI } from '../../../services/apiCabins';
export function useDeleteCabin() {
  // a hook used to invalidate the fetched data, to refetch them again

  const queryClient = useQueryClient();

  // a hook used to mutate the data
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinAPI,
    onSuccess: () => {
      toast.success('Cabin was deleted successfully');
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
    },
    onError: (err) => toast.error(err.message)
  });

  return { isDeleting, deleteCabin };
}
