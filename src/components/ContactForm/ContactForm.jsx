import { useSelector, useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import css from './ContactForm.module.css';


export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);

      
const handleSubmit = event => {
  event.preventDefault();

  const form = event.target;
  const name = form.elements.name.value;

  const contactExist = items.some(
    contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
  );

  if (contactExist) {
    alert(`${name} is already in your contacts`);
    return;
  }

  dispatch(
    addContactThunk({
      name: name,
      phone: form.elements.number.value,
    })
  );

  form.reset();

  };

  return (
    <>
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.labelName}>
        Name
        <input
          className={css.inputName}
          type="text"
          name="name"
          required
          placeholder="Enter name..."
        
        />
      </label>
      <label className={css.labelTel}>
        Number
        <input
          className={css.inputTel}
          type="tel"
          name="number"
          required
          placeholder="Enter number..."
       
        />
      </label>
      <button className={css.buttonAddContact} type="submit">
        Add contact
      </button>
      </form>
    </>
  );
};