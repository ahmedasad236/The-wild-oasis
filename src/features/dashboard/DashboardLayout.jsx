import styled from 'styled-components';
import { useRecentBookings } from './hooks/useRecentBookings';
import { useRecentStays } from './hooks/useRecentStays';
import { useCabins } from '../cabins/hooks/useCabins';

import Spinner from '../../ui/Spinner';
import Stats from './Stats';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from '../check-in-out/TodayActivity';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoadingBookings } = useRecentBookings();
  const { isLoadingStays, confirmedStays, numDays } = useRecentStays();
  const { cabins, isLoadingCabins } = useCabins();

  if (isLoadingBookings || isLoadingStays || isLoadingCabins) {
    return <Spinner />;
  }
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays || []}
        numDays={numDays}
        cabinsCount={cabins.length || []}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart
        bookings={bookings || []}
        numDays={numDays || []}
      />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
