import React from "react";
import { withTranslation } from 'react-i18next';

import Layout from '../components/layout/layout';
import styles from './contact.sass.module.scss';

const ContactPage = ({ pathContext, t, i18n }) => {
  if (i18n.language !== pathContext.locale) i18n.changeLanguage(pathContext.locale);
  return (
    <Layout path={pathContext.pathname}>
      <form
        className={styles.form}
        action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScD_eKRlXkmQRU22rVAqPv6IdrZiXttKJeHQI9nqbP5OEvxrg/formResponse"
        method="post"
      >
        <h1>{t('Contact')}</h1>
        <p className={styles.warning}><span className={styles.required}>*</span> {t('Indicates required field')}</p>
        <p>{t('Name')} <span className={styles.required}>*</span></p>
        <label className={styles.blocks}>
          <input type="text" name="entry.2005620554" autoComplete="given-name" required/>
          <span className={styles.additionalLabel}>{t('First')}</span>
        </label>
        <label className={styles.blocks}>
          <input type="text" name="entry.2097294058" autoComplete="family-name" required/>
          <span className={styles.additionalLabel}>{t('Last')}</span>
        </label>

        <label htmlFor="email"><p>{t('Email')} <span className={styles.required}>*</span></p></label>
        <input type="email" id="email" autocomplete="email" name="entry.1045781291" required/>

        <label htmlFor="theme"><p>{t('Theme')} <span className={styles.required}>*</span></p></label>
        <input type="text" id="theme" name="entry.1883068248" required/>

        <label htmlFor="text"><p>{t('Text')} <span className={styles.required}>*</span></p></label>
        <textarea name="entry.839337160" id="text" required></textarea>

        <button type="submit">{t('Submit')}</button>
      </form>
    </Layout>
  )
}

export default withTranslation('contact-form')(ContactPage);
