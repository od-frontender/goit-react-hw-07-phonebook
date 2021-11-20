import { fetchContacts } from './redux/api';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <Container>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
export default App;
