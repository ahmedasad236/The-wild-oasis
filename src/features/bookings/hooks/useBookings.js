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
  const sortByValue = searchParams.get('sortBy') || 'start_date-desc';
  const [field, direction] = sortByValue.split('-');
  const sortBy = { field, direction };

  // PAGINATION
  const page = Number(searchParams.get('page')) || 1;

  const {
    isLoading,
    data: { bookings, count } = {},
    error
  } = useQuery({
    // Add the filter, sortBy as query keys so that the query is re-fetched when the filter or sortBy changes
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page })
  });
  return { isLoading, bookings, error, count };
}
