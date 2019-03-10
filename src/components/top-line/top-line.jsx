import React from "react";
import PropTypes from 'prop-types';

import LanguageSelector from '../language-selector/language-selector';
import styles from './top-line.module.scss';

const TopLine = ({ path, parentStyles = {} }) => {
  return (
    <div className={styles.topLine}>
      <div className={parentStyles.container}>
        <div className={styles.links}>Links</div>
        <LanguageSelector path={path} />
      </div>
    </div>
  )
}

TopLine.propTypes = {
  path: PropTypes.string.isRequired,
  parentStyles: PropTypes.objectOf(PropTypes.string),
}

export default TopLine
