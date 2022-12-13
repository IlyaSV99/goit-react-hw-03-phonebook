import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

function ContactList({ contacts, onClick }) {
  const elements = contacts.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      {name}: {number}
      <button
        className={css.button}
        type="button"
        onClick={() => onClick(id)}
      >
        Delete
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
}

ContactList.defaultProps = {
  contacts: [],
  onClick: () => {},
};
ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;