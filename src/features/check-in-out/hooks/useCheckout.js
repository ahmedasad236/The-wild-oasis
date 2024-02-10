import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../../services/apiBookings';
import toast from 'react-hot-toast';

export const useCheckout = () => {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (booking_id) =>
      updateBooking(booking_id, {
        status: 'checked-out'
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has been checked out successfully`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (error) => {
      toast.error('Could not check out booking');
    },

    retry: false
  });

  return { checkout, isCheckingOut };
};
