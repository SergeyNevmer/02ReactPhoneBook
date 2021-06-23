import React from "react";
import PropTypes from "prop-types";

const Sections = ({ sectionName, children }) => {
  return (
    <section>
      <h2>{sectionName}</h2>
      {children}
    </section>
  );
};

Sections.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default Sections;
