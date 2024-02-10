import styled from 'styled-components';
import BookingDataBox from '../../features/bookings/BookingDataBox';

import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
import Spinner from '../../ui/Spinner';
import CheckBox from '../../ui/Checkbox';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from '../bookings/hooks/useBooking';
import { useEffect, useState } from 'react';

import { formatCurrency } from '../../utils/helpers';
import { useCheckin } from './hooks/useCheckin';

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const [confirmCheckin, setConfirmCheckin] = useState(false);
  const { booking, isLoading } = useBooking();
  const { checkin, isCheckingIn } = useCheckin();

  useEffect(() => {
    if (booking?.is_paid) {
      setConfirmCheckin(true);
    }
  }, [booking]);

  if (isLoading) {
    return <Spinner />;
  }

  const {
    id: bookingId,
    Guests,
    total_price,
    num_guests,
    has_breakfast,
    num_nights
  } = booking;

  function handleCheckin() {
    if (confirmCheckin) {
      checkin();
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Box>
        <CheckBox
          checked={confirmCheckin}
          disabled={confirmCheckin || isCheckingIn}
          id={`confirm-checkin-${bookingId}`}
          onChange={() =>
            setConfirmCheckin((prevConfirmCheckin) => !prevConfirmCheckin)
          }
        >
          I confirm that {Guests.full_name} has paid the total amount of{' '}
          {formatCurrency(total_price)} for {num_guests} guests, for{' '}
          {num_nights}
          nights, and that breakfast is{' '}
          {has_breakfast ? 'included' : 'not included'}.
        </CheckBox>
      </Box>

      <ButtonGroup>
        <Button
          disabled={isCheckingIn || !confirmCheckin}
          onClick={handleCheckin}
        >
          Check in booking #{bookingId}
        </Button>
        <Button
          variation="secondary"
          onClick={moveBack}
        >
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
