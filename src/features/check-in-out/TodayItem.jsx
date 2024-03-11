import styled from 'styled-components';
import { Flag } from '../../ui/Flag';
import Tag from '../../ui/Tag';
import Button from '../../ui/Button';
import CheckOutButton from './CheckoutButton';
import { Link } from 'react-router-dom';

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 10rem 1fr;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-lg);
  padding: 0.6rem;
  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { status, Guests, num_nights, id } = activity;
  return (
    <StyledTodayItem>
      {status === 'unconfirmed' && <Tag type="green">Arriving</Tag>}
      {status === 'checked-in' && <Tag type="blue">Departing</Tag>}
      <Flag
        src={Guests.country_flag}
        style={{ justifySelf: 'center' }}
        alt={`flag of ${Guests.country}`}
      />
      <Guest>{Guests.full_name}</Guest>
      <div>{num_nights} nights</div>

      {status === 'unconfirmed' && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}

      {status === 'checked-in' && <CheckOutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
