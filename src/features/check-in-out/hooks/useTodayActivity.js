import { useQuery } from '@tanstack/react-query';
import { getStaysTodayActivity } from '../../../services/apiBookings';

export function useTodayActivity() {
  const { data, isLoading } = useQuery({
    queryKey: ['today-activity'],
    queryFn: getStaysTodayActivity
  });

  return { todaysActivity: data, isLoading };
}
