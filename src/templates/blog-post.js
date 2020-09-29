import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import datePretty from '../components/date-pretty';
import './blog-post.css';
import Image from '../components/image';

const BlogPost = ({ data }) => {
  const blogData = data.contentfulPersonalSiteBlog;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content[0].marks.length === 1 &&
          node.content[0].marks[0].type === 'code'
        ) {
          return <pre className="blog-post__preformat">{children}</pre>;
        } else {
          return <p className="blog-post--p">{children}</p>;
        }
      },
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="blog-post--h1">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="blog-post--h2">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="blog-post--h3">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="blog-post--h4">{children}</h4>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <div className="blog-post--embedAsset">
          <Image source={children} />
        </div>
      )
    }
  };

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
          {blogData.body.json.content.map(node => console.table(node.content))}
          <div className="blog-post__main">{doc}</div>
        </div>
      </div>
    </Layout>
  );
};

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
  }
`;

export default BlogPost;
