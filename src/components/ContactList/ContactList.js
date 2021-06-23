import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ arrayContacts, deleteContact }) => {
  return (
    <ul>
      {arrayContacts.map((item) => {
        return (
          <li key={item.id}>
            {item.name}: {item.number}
            <button
              className={styles.btn}
              onClick={() => deleteContact(item.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  arrayContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
