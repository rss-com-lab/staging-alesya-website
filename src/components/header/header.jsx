import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import LocalizedLink from '../localized-link';
import styles from './header.module.scss';

const Header = ({ parentStyles = {} }) => {
  const { t } = useTranslation('header');

  return (
    <header className={styles.header}>
      <div className={parentStyles.container}>
        <h2 style={{ margin: 0 }}>
          <LocalizedLink to="/">
            {t('title')}
          </LocalizedLink>
        </h2>
        <nav>
          <ul>
            <li>
              <LocalizedLink to="/" activeClassName={styles.active}>{t('About me')}</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/writing" activeClassName={styles.active}>{t('Writing')}</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/blog" activeClassName={styles.active}>{t('Blog')}</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/contact" activeClassName={styles.active}>{t('Contact')}</LocalizedLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  parentStyles: PropTypes.objectOf(PropTypes.string),
}

export default Header
