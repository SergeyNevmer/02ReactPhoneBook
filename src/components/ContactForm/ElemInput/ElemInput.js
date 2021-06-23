import React from "react";
import PropTypes from "prop-types";
import styles from "./ElemInput.module.css";

const ElemInput = ({ type, name, pattern, title, value, change }) => {
  return (
    <input
      className={styles.margin}
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      required
      value={value}
      onChange={change}
    ></input>
  );
};

ElemInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default ElemInput;
