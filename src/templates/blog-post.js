import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import options from './rich-text-options';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import datePretty from '../components/date-pretty';
import './blog-post.css';
import Image from '../components/image';

const BlogPost = ({ data }) => {
  const blogData = data.contentfulPersonalSiteBlog;
 
  const doc = documentToReactComponents(blogData.body.json, options);

  const createdAt = datePretty(new Date(blogData.createdAt));
  const updatedAt = datePretty(new Date(blogData.updatedAt));

  return (
    <Layout>
      <SEO title={blogData.title} content={blogData.tags} />
      <div id="blog-container">
        <span id="meta-span">
          <h6>Created on {createdAt}</h6>
          <h6>Updated on {updatedAt}</h6>
        </span>
        <div id="blog-content-wrapper">
          <h1>{blogData.title}</h1>
          <div className="blog-post__main">{doc}</div>
        </div>
      </div>
    </Layout>
  );
}


export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPersonalSiteBlog(slug: { eq: $slug }) {
      id
      title
      body {
        json
      }
      tags
      createdAt
      updatedAt
      summary {
        json
      }
    }
    allContentfulAsset {
      edges {
        node {
          id
          contentful_id
          file {
            url
          }
        }
      }
    }
  }
`;

export default BlogPost;
