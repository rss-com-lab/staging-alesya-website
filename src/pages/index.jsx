import React from "react";
import { graphql } from 'gatsby';
import { withTranslation } from 'react-i18next';

import Layout from "../components/layout/layout";

const IndexPage = ({ pathContext, i18n, data }) => {
  if (i18n.language !== pathContext.locale) i18n.changeLanguage(pathContext.locale);

  const pageData = data.allContentfulPage.edges
    .filter(item => item.node.node_locale === pathContext.locale)[0].node;

  const { photo } = pageData;

  const photoHTML = `<img src="${photo.resolutions.src}" alt="${photo.title}" />`

  console.log(photoHTML);

  return (
    <Layout path={pathContext.pathname}>
      <div 
        dangerouslySetInnerHTML={{ __html: photoHTML + pageData.text.childMarkdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default withTranslation()(IndexPage);

export const pageQuery = graphql`
  {
    allContentfulPage {
      edges {
        node {
          title
          node_locale
          text {
            childMarkdownRemark {
              html
            }
          }
          photo {
            title
            resolutions(width: 1600) {
              src
            }
          }
        }
      }
    }
  }
`
