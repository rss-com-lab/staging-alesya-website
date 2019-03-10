import React from 'react';
import PropTypes from 'prop-types';

import TopLine from '../top-line/top-line';
import Header from '../header/header';
import Footer from '../footer/footer';
import '../i18next';
import './layout.scss';  
import styles from './layout.module.scss'

const Layout = ({ children, path }) => (
  <div className={styles.wrapper}>
    <TopLine path={path} parentStyles={styles} /> 
    <Header parentStyles={styles} />
    <main className={[styles.container, styles.main].join(' ')}>{children}</main>
    <Footer parentStyles={styles} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout;
