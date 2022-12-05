import { useSelector, useDispatch } from 'react-redux';
import { filterContact, getFilter } from '../../Redux/contacts/filterSlice';

const Filter = () => {
  const filterList = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        value={filterList}
        autoComplete="off"
        onChange={evt => dispatch(filterContact(evt.target.value))}
      ></input>
    </>
  );
};

export default Filter;
