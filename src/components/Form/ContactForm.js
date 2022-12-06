import React, { useState } from 'react';
import { Box } from '../Utilits/Box';
import {
  ContactFrm,
  FormLabel,
  FormInput,
  FormBtn,
} from './ContactForm.styled';
import {
  useAddContactsMutation,
  useFetchContactsQuery,
} from 'Redux/contacts/contactsSlise';

const ContactForm = () => {
  const { data } = useFetchContactsQuery();
  const [addContacts] = useAddContactsMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Responsible for updating the state
  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return console.warn(`No ${name} options`);
    }
  };

  // Called when the form is submitted
  const handleSubmit = async evt => {
    evt.preventDefault();
    const isInclude = data?.map(contact => contact.name);
    if (isInclude.includes(name)) {
      return alert(`${name} is already in contacts`);
    }
    const contactToAdd = {
      name,
      phone: number,
    };
    try {
      await addContacts(contactToAdd);
    } catch (err) {
      console.log(err);
    }
    reset();
  };

  // Reset the form inputs
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box border="contactForm" padding={2}>
      <ContactFrm onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            value={name}
            onChange={handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            value={number}
            onChange={handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>

        <FormBtn type="submit">Add contact</FormBtn>
      </ContactFrm>
    </Box>
  );
};

export default ContactForm;
