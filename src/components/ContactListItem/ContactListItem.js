import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemBtn } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'Redux/contacts/contactsOperations';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ListItem>
        <ListItemText>
          {name}: {number}
        </ListItemText>
        <ListItemBtn type="button" onClick={() => dispatch(deleteContacts(id))}>
          Delet
        </ListItemBtn>
      </ListItem>
    </>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
