import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts, selectLoading, selectError } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {loading && <p>Завантаження...</p>}
      {error && <p className={styles.error}>Помилка: {error}</p>}
      <ul className={styles.list}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id} className={styles.item}>
            <div>
              <p className={styles.name}>{name}</p>
              <p className={styles.phone}>{phone}</p>
            </div>
            <button
              className={styles.deleteButton}
              onClick={() => dispatch(deleteContact(id))}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
