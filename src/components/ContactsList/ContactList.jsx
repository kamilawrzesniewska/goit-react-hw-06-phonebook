import style from './Contacts.module.css';
import PropTypes from 'prop-types';


import { getFilterValue, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/actions';
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = () => {
  
  const filterValue = useSelector(getFilterValue);


  const dispatch = useDispatch();

  const toDelete = idToDelete => {
    return dispatch(deleteContact(idToDelete));
  };

  const contacts = useSelector(getContacts);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );


  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={style.contactList}>
          
          {filteredContacts.map(contact => {
            
            return (
              <li className={style.contactItem} key={contact.id}>
                <span>{`${contact.name}: ${contact.number}`}</span>
                <button
                  type="button"
                  className={style.btn}
                  onClick={() => toDelete(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>You don't have this contact</div>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};