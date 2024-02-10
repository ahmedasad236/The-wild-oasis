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
import { useSettings } from '../settings/hooks/useSettings';

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
  const [addBreakfast, setAddBreakfast] = useState(false);

  const { booking, isLoading } = useBooking();
  const { checkin, isCheckingIn } = useCheckin();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(() => {
    if (booking?.is_paid) {
      setConfirmCheckin(true);
    }

    if (booking?.has_breakfast) {
      setAddBreakfast(true);
    }
  }, [booking]);

  if (isLoading || isLoadingSettings || isCheckingIn) {
    return <Spinner />;
  }

  const { breakfast_price } = settings;
  const {
    id: bookingId,
    Guests,
    total_price,
    num_guests,
    has_breakfast,
    num_nights
  } = booking;

  const optionalBreakfastPrice = breakfast_price * num_guests * num_nights;
  function handleCheckin() {
    if (!confirmCheckin) return;
    if (addBreakfast) {
      checkin({
        booking_id: bookingId,
        breakfast: {
          has_breakfast: true,
          extras_price: optionalBreakfastPrice,
          total_price: optionalBreakfastPrice + total_price
        }
      });
    } else {
      checkin({ booking_id: bookingId });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!has_breakfast && (
        <Box>
          <CheckBox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((prevAddBreakfast) => !prevAddBreakfast);
              setConfirmCheckin(false);
            }}
            id="add-breakfast"
          >
            Want to add breakfast for {optionalBreakfastPrice}
            $?
          </CheckBox>
        </Box>
      )}

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
          {!addBreakfast
            ? formatCurrency(total_price)
            : `${formatCurrency(
                total_price + optionalBreakfastPrice
              )} (${formatCurrency(total_price)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
          for {num_guests} guests, for {num_nights}
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
