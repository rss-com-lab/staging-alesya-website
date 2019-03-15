import React from "react";
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { withTranslation } from 'react-i18next';

import Layout from '../components/layout/layout';
import WritingsList from '../components/writings-list/writings-list';
import WritingBody from '../components/writing-body/writing-body';
import styles from './writing.module.scss';

class WrirtingPage extends React.PureComponent {
  constructor(props) {
    super(props);
    
    const writings = props.data.allContentfulWriting.edges
      .filter(item => item.node.node_locale === props.pathContext.locale)
      .map(item => item.node)

    this.state = {
      writings,
      writing: null,
    };
  }

  writingChangeHolder(writing) {
    this.setState({
      writing,
    });
  }

  render () {
    const { pathContext, i18n, t } = this.props;
    const { writings, writing } = this.state;

    if (i18n.language !== pathContext.locale) i18n.changeLanguage(pathContext.locale);

    return <Layout path={pathContext.pathname}>
      <div className={styles.writingWrapper}>
        <Helmet>
          <title>{`${t('Writing')} – ${t('title')}`}</title>
        </Helmet>
        <aside>
          <WritingsList writings={writings} writingChangeHolder={writing => this.writingChangeHolder(writing)} />
        </aside>
        {this.state.writing && <WritingBody writing={writing}/>}
      </div>
    </Layout>
  }
}

export default withTranslation('header')(WrirtingPage);

export const pageQuery = graphql`
  {
    allContentfulWriting {
      edges {
        node {
          title
          node_locale
          date
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
