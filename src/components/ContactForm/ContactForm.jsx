import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Ім'я"
        required
      />
      <input
        className={styles.input}
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Телефон"
        required
      />
      <button type="submit" className={styles.button}>
        Додати контакт
      </button>
    </form>
  );
};

export default ContactForm;
