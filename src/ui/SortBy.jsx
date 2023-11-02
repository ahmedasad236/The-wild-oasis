import Select from './Select';
import { useSearchParams } from 'react-router-dom';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currOption = searchParams.get('sortBy') || options[0].value;
  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      activeValue={currOption}
      onChange={handleChange}
      type="white"
    />
  );
}

export default SortBy;
