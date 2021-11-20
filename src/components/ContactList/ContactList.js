import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/api';
import { getFilteredContacts } from '../../redux/selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const deleteContactFromId = ({ target }) =>
    dispatch(deleteContact(target.id));

  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <span className={s.name}>{name}:</span>
            <span className={s.tell}>{number}</span>
            <button
              className={s.button}
              type="button"
              id={id}
              onClick={deleteContactFromId}
            >
              remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactList;
