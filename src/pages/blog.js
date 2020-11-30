import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './blog.css';
import FlatCard from '../components/flat-card';

const Blog = ({ data }) => {
   const blogData = data.allContentfulPersonalSiteBlog.edges;
	console.log(blogData)
   return (
		
      <Layout>
         <SEO title="Shen Codes Blog" />
         <div className="blog-list">
            <ul className="blog-list__ul">
               {blogData.map(node => (
                  <FlatCard
                     source={node.node.featuredImage}
                     title={node.node.title}
                     summary={node.node.summary.json}
                     createdAt={node.node.createdAt}
                     updatedAt={node.node.updatedAt}
                     slug={node.node.slug}
                     key={node.node.slug}
                  />
               ))}
            </ul>
         </div>
      </Layout>
   );
};

export const BlogQuery = graphql`
   query BlogQuery {
      allContentfulPersonalSiteBlog(sort: {order: DESC, fields: createdAt}) {
         edges {
            node {
               featuredImage {
                  fluid(maxWidth: 200, maxHeight: 180) {
                     ...GatsbyContentfulFluid
                  }
               }
               title
               summary {
                  json
               }
               body {
                  json
               }
               slug
               tags
               createdAt
               updatedAt
            }
         }
      }
   }
`;

export default Blog;
