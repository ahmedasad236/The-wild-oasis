import styled from 'styled-components';
import { useRecentBookings } from './hooks/useRecentBookings';
import { useRecentStays } from './hooks/useRecentStays';

import Spinner from '../../ui/Spinner';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoadingBookings } = useRecentBookings();
  const { stays, isLoadingStays, confirmedStays } = useRecentStays();

  if (isLoadingBookings || isLoadingStays) {
    return <Spinner />;
  }
  return (
    <StyledDashboardLayout>
      <div>Stats</div>
      <div>Today's Activity</div>
      <div>Chart stay duration</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
