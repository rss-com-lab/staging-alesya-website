import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Footer = ({ parentStyles = {} }) => {
  const { t } = useTranslation();

  return (
    <footer className={parentStyles.container}>
      © 2018-{new Date().getFullYear()}: {t('name')}
    </footer>
  )
}

Footer.propTypes = {
  parentStyles: PropTypes.objectOf(PropTypes.string),
}

export default Footer;
