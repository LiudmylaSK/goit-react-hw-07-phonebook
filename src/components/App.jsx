import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import { MdContactPhone } from 'react-icons/md';
import css from './App.module.css';

const App = () => {
   const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>
        <MdContactPhone className={css.iconContact} />
        Phonebook
      </h1>
      <ContactForm />
      <h2 className={css.contactsTitle}>Contacts</h2>

       {items.length === 0 ?  <p className={css.noContactsText}>
          There are no contacts in your Phonebook yet. Create the first one
        </p> : <SearchFilter />}
      {isLoading === true && <p>Loading, please wait...</p>}
      <ContactsList />
      {error !== null && <p>Something went wrong, try again</p>}
    </div>
  );
};

export default App;
