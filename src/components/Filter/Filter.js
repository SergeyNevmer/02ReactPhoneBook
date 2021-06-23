import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, change }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" value={value} onChange={change}></input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Filter;
