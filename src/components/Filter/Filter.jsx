import style from './Filter.module.css';

import { setFilter } from 'redux/actions';
import { useDispatch } from 'react-redux';

export const Filter = () => {
    
  const dispatch = useDispatch();

  const onChange = event => {
    const value = event.target.value.toLowerCase();

    dispatch(setFilter(value));
  };

  return (
    <label>
      Find contacts by Name <input className={style.filterInput} type="name" onChange={onChange} />
    </label>
  );
};