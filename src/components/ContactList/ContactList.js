import React, { useEffect, useMemo } from 'react';
import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../Redux/contacts/filterSlice';
import * as contactsOperations from '../../Redux/contacts/contactsOperations';
import { getContacts } from 'Redux/contacts/contactsSelectors';

const ContactList = () => {
  const contactList = useSelector(getContacts);
  const filterItem = useSelector(getFilter);
  const dispatch = useDispatch();
  console.log('qqqqq', contactList);
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  //Responsible for rendering the requested/all contacts
  const findContactbyName = useMemo(() => {
    return contactList.filter(contact =>
      contact?.name.toLowerCase().includes(filterItem)
    );
  }, [contactList, filterItem]);

  return (
    <>
      <h2>Contacts : {findContactbyName.length}</h2>

      <List>
        {findContactbyName.map(({ name, phone, id }) => (
          <ContactListItem key={id} name={name} number={phone} id={id} />
        ))}
      </List>
    </>
  );
};

export default ContactList;
