import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No Discount' },
          { value: 'with-discount', label: 'With Discount' }
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          { value: 'regular_price-asc', label: 'Sorty by price (Low first)' },
          { value: 'regular_price-desc', label: 'Sorty by price (High first)' },
          {
            value: 'max_capacity-asc',
            label: 'Sorty by max capacity (Low first)'
          },
          {
            value: 'max_capacity-desc',
            label: 'Sorty by max capacity (High first)'
          }
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
