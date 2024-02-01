import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../../utils/constants';

export function useBookings() {
  const queryClient = useQueryClient();
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

  // QUERY
  const {
    isLoading,
    data: { bookings, count } = {},
    error
  } = useQuery({
    // Add the filter, sortBy as query keys so that the query is re-fetched when the filter or sortBy changes
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page })
  });

  // PRE-FETCH
  const totalPages = Math.ceil(count / PAGE_SIZE);

  // prefetch the next page
  if (page < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 })
    });
  }

  // prefetch the previous page
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 })
    });
  }

  return { isLoading, bookings, error, count };
}
