







import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

const FilterBar = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        name="blockName"
        placeholder="Filter by name"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default FilterBar;

