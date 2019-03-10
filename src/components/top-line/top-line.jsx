import React from "react";
import PropTypes from 'prop-types';

import LanguageSelector from '../language-selector';

const TopLine = ({ path, parentStyles = {} }) => {
  return (
    <div className={parentStyles.container}>
      <LanguageSelector path={path} />
    </div>
  )
}

TopLine.propTypes = {
  path: PropTypes.string.isRequired,
  parentStyles: PropTypes.objectOf(PropTypes.string),
}

export default TopLine
