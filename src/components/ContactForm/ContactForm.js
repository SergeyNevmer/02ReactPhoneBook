import React from "react";
import PropTypes from "prop-types";
import ElemInput from "./ElemInput/ElemInput";
import styles from "./ContactForm.module.css";

const ContactForm = ({ value, change, submit, number }) => {
  return (
    <form onSubmit={submit} className={styles.wrapper}>
      <label className={styles.labelWrapper}>
        Name
        <ElemInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={value}
          change={change}
        />
      </label>
      <label className={styles.labelWrapper}>
        Number
        <ElemInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          change={change}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactForm;
