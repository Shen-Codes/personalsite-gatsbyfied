import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import './projects.css';
import Card from '../components/card';

const Projects = ({ data }) => {
   return (
      <Layout>
         <SEO title="Shen Codes Projects" />
         <div id="cards-div">
            <div id="div-within">
               {data.allContentfulPersonalSiteProjects.edges.map(node => (
                  <Card
                     title={node.node.title}
                     source={node.node.featuredImage}
                     summary={node.node.summary.json}
                     github={node.node.github}
                     siteLink={node.node.linkToSite}
                     key={node.node.title}
                     // writeup={node.node.writeUp.json}
                  />
               ))}
            </div>
         </div>
      </Layout>
   );
};

export const projectsQuery = graphql`
   query projectsQuery {
      allContentfulPersonalSiteProjects {
         edges {
            node {
               title
               featuredImage {
                  fluid(maxWidth: 350, maxHeight: 200) {
                     ...GatsbyContentfulFluid
                  }
               }
               summary {
                  json
               }
               writeUp {
                  json
               }
               github
               linkToSite
            }
         }
      }
   }
`;

export default Projects;
