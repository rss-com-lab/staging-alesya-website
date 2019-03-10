import React from "react";
import { withTranslation } from 'react-i18next';

import Layout from "../components/layout/layout";

const IndexPage = ({ pathContext, t, i18n }) => {
  if (i18n.language !== pathContext.locale) i18n.changeLanguage(pathContext.locale);
  return (
    <Layout path={pathContext.pathname}>
      <h1>{t('Hi people')}</h1>
    </Layout>
  )
}

export default withTranslation()(IndexPage);
