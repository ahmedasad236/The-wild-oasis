import Spinner from '../../ui/Spinner';
import { useCabins } from './hooks/useCabins';
import { useSearchParams } from 'react-router-dom';

import CabinRow from './CabinRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resource="Cabins" />;

  const filterValue = searchParams.get('discount') || 'all';
  let filteredCabins;

  // 1) This is for filter
  if (filterValue === 'with-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  } else if (filterValue === 'no-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  } else {
    filteredCabins = cabins;
  }

  // 2) This is for sorting
  const sortBy = searchParams.get('sortBy') || 'name-asc'; // To get the field and the direction of sorting
  const [field, direction] = sortBy.split('-'); // To extract the field and direction(asc or desc)
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (c1, c2) => modifier * (c1[field] - c2[field])
  ); // Sort the data based on the field and the modifier (asc or desc)
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => (
            <CabinRow
              cabin={cabin}
              key={cabin.id}
            />
          )}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
