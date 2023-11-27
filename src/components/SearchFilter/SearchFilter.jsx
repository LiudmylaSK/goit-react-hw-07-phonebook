import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

import css from './SearchFilter.module.css';

export function SearchFilter()  {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

return (
  <label className={css.labelFilter} htmlFor="filterInput">
    Find contacts by name
    <input
      id="filterInput"
      className={css.inputFilter}
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Filter by name..."
    />
  </label>
);

};