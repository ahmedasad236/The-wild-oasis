import { formatCurrency } from '../../utils/helpers';
import Stat from './Stat';
import {
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineBanknotes,
  HiOutlineCalendarDays
} from 'react-icons/hi2';

function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  // 1.
  const totalBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, booking) => acc + booking.total_price, 0);

  // 3.
  const totalCheckIns = confirmedStays.length;

  // 4. occupancy rate = num checked-in nights / all available nights(total days * total cabins)
  const occupations =
    confirmedStays.reduce((acc, stay) => acc + stay.num_nights, 0) /
    (numDays * cabinsCount);
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={totalBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check-ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={totalCheckIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupations * 100) + '%'}
      />
    </>
  );
}

export default Stats;
