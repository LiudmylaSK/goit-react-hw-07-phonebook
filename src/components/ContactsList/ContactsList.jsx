import { selectVisibleContacts} from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';

import css from './ContactsList.module.css';


export function ContactsList() {
  const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);

    return (
        <ul className={css.contactsList}>
            {contacts.map(({ id, name, phone }) => (
                    <li key={id} className={css.listItem}>
                        {name}: <span className={css.listItemNumber}>{phone}</span>
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
                ))}
        </ul>
    );
}
