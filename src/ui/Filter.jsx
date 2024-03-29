import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.1rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }

  @media (max-width: 1024px) {
    flex: 1;
  }
`;

// Reusable Filter component based on changing the filter value in the URL
function Filter({ filterField, options }) {
  // Use this hook to handle the search params for filtering data
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set(filterField, value);

    // To handle the error if the data is less than the current page
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  }

  const currentFilterValue = searchParams.get(filterField) || options[0].value;
  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilterValue}
          disabled={option.value === currentFilterValue}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
