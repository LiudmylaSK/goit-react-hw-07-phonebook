import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

import css from './ContactsList.module.css';



export function ContactsList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.listItem}>
            {name}: <span className={css.listItemNumber}>{number}</span>
            <button
              className={css.buttonDeleteItem}
              type="button"
              onClick={() => {
                dispatch(deleteContactThunk(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
