import React from 'react';

import { InputFilterStyled } from './FilterStyled';
import { FilterLabelStyled } from './FilterStyled';
import { setFilter } from '../../redux/filterSplice';
import { selectFilter } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const inputHandleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <>
      <FilterLabelStyled>Find contacts by name</FilterLabelStyled>
      <FilterLabelStyled htmlFor="filter">
        <InputFilterStyled
          type="text"
          value={filter}
          onChange={inputHandleChange}
          name="filter"
        />
      </FilterLabelStyled>
    </>
  );
};

export default Filter;
