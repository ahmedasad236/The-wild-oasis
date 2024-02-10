import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBooking as deleteBookingAPI } from '../../../services/apiBookings';
export function useDeleteBooking() {
  // a hook used to invalidate the fetched data, to refetch them again
  const queryClient = useQueryClient();

  // a hook used to mutate the data
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingAPI,
    onSuccess: () => {
      toast.success('Booking was deleted successfully');
      queryClient.invalidateQueries({
        queryKey: ['bookings']
      });
    },
    onError: (err) => toast.error(err.message)
  });

  return { isDeleting, deleteBooking };
}
