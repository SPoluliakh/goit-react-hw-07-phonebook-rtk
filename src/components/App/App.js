import ContactForm from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Box } from '../Utilits/Box';
import { MaineTitle } from './App.styled';

export const App = () => {
  return (
    <Box display="flex">
      <Box
        marginLeft="auto"
        marginRight="auto"
        padding={4}
        border="phonebook"
        backgroundColor="phonebookBcg"
        boxShadow="boxShadow"
        minWidth="420px"
      >
        <MaineTitle>Phonebook</MaineTitle>
        <ContactForm />
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
};
