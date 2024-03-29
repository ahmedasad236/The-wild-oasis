import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getBookingsAfterDate } from '../../../services/apiBookings';

export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = Number(searchParams.get('last')) || 7;
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading: isLoadingBookings } = useQuery(
    ['bookings', `last-${numDays}`],
    () => getBookingsAfterDate(queryDate),
    { refetchOnWindowFocus: false }
  );

  return { bookings, isLoadingBookings };
}
