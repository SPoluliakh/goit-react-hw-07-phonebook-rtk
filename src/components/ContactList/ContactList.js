import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem';
import { useSelector } from 'react-redux';
import { getFilter } from '../../Redux/contacts/filterSlice';

import { useFetchContactsQuery } from 'Redux/contacts/contactsSlise';

const ContactList = () => {
  const filterItem = useSelector(getFilter);
  const { data } = useFetchContactsQuery();

  //Responsible for rendering the requested/all contacts
  const findContactbyName = () => {
    return data?.filter(contact =>
      contact.name.toLowerCase().includes(filterItem)
    );
  };

  return (
    <>
      <h2>Contacts : {findContactbyName()?.length}</h2>

      <List>
        {findContactbyName()?.map(({ name, phone, id }) => (
          <ContactListItem key={id} name={name} number={phone} id={id} />
        ))}
      </List>
    </>
  );
};

export default ContactList;
