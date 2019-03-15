import React from "react";
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import styles from './writing-body.module.scss';

function getDate(dateString, t) {
  const date = new Date(dateString);

  return `${t(`month${date.getMonth()}`)} ${date.getFullYear()}`
}

const WritingBody = ({ writing }) => {
  const { t } = useTranslation('writing');

  return (
    <article className={styles.article}>
      <header>
        <h1>{writing.title}</h1>
      </header>
      <main dangerouslySetInnerHTML={{ __html: writing.text.childMarkdownRemark.html }}></main>
      <footer><span>{t('Date')}:</span> {getDate(writing.date, t)}</footer>
    </article>
)
}

export default WritingBody
