import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemBtn } from './ContactListItem.styled';

import { useDeleteContactsMutation } from 'Redux/contacts/contactsSlise';

const ContactListItem = ({ name, number, id }) => {
  const [deleteContacts] = useDeleteContactsMutation();

  return (
    <>
      <ListItem>
        <ListItemText>
          {name}: {number}
        </ListItemText>
        <ListItemBtn type="button" onClick={() => deleteContacts(id)}>
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
