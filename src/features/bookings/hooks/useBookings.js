import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get('status') || 'all';
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  // SORT BY
  const sortByValue = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByValue.split('-');
  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error
  } = useQuery({
    // Add the filter, sortBy as query keys so that the query is re-fetched when the filter or sortBy changes
    queryKey: ['bookings', filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy })
  });
  return { isLoading, bookings, error };
}
