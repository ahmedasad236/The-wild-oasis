import { useQuery } from '@tanstack/react-query';
import { getStaysTodayActivity } from '../../../services/apiBookings';

export function useTodayActivity() {
  const { data, isLoading } = useQuery({
    queryKey: ['today-activity'],
    queryFn: getStaysTodayActivity
  });

  console.log("Today's activity: ", data, isLoading);
  return { todaysActivity: data, isLoading };
}
