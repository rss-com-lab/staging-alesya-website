import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import LocalizedLink from '../localized-link';

const Header = ({ parentStyles = {} }) => {
  const { t } = useTranslation();

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div className={parentStyles.container}>
        <h1 style={{ margin: 0 }}>
          <LocalizedLink
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {t('test')}
          </LocalizedLink>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  parentStyles: PropTypes.objectOf(PropTypes.string),
}

export default Header
