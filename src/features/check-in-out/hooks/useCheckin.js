import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { updateBooking } from '../../../services/apiBookings';
import toast from 'react-hot-toast';

export const useCheckin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ booking_id, breakfast }) =>
      updateBooking(booking_id, {
        is_paid: true,
        status: 'checked-in',
        ...breakfast
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has been checked in successfully`);
      queryClient.invalidateQueries({ active: true });
      navigate('/');
    },
    onError: (error) => {
      toast.error('Could not check in booking');
    },

    retry: false
  });

  return { checkin, isCheckingIn };
};
