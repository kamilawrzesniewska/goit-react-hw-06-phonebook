import style from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import React from 'react';

import { getContacts } from 'redux/selectors';
import { addNewContact } from 'redux/actions';
import { useSelector, useDispatch } from 'react-redux';



const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const id = nanoid();

  const dispatch = useDispatch();

  const addItem = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;

    const normalizedName = name.toLowerCase();
    let nameOntheList = false;
    const number = form.number.value;

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === normalizedName) {
        alert(`${contact.name} is already in contacts`);
        nameOntheList = true;
      }
    });

    if (nameOntheList) return;

    dispatch(addNewContact(newContact));
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={addItem}>
      <label htmlFor={id}>Name</label>
      <input
        className={style.input}
        id={id}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={id}>Phone</label>
      <input
        className={style.input}
        id={id}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;