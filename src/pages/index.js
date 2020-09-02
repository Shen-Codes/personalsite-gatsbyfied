import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import './index.css';

const IndexPage = ({ data }) => {
   const document = data.contentfulPersonalSiteAbout.blurb.json;

   const options = {
      renderNode: {
         [BLOCKS.HEADING_2]: (node, children) => (
            <h2 className="about__blurb--h2">{children}</h2>
         ),
         [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="about__blurb--p">{children}</p>
         )
      }
   };

   const docToReact = documentToReactComponents(document, options);

   return (
      <Layout>
         <SEO title="Shen Codes About" />
         <div id="index-container">
            <div className="about">
               <div className="about__image--div">
                  <Image
                     source={
                        data.contentfulPersonalSiteProfilePicture.profilePic
                     }
                  />
               </div>
               <div className="about__blurb--div">{docToReact}</div>
               <a
                  href={`https:${data.contentfulPersonalSiteResume.resume.file.url}`}
               >
                  <button className="resume-button">See Resume</button>
               </a>
            </div>
            <div className="collab-div">
               <h3 className="collab-div__header">
                  Have opportunities you think I would be a good fit for?
               </h3>
               <h5 className="collab-div__header">Let's keep in touch!</h5>
            </div>
         </div>
      </Layout>
   );
};

export const indexQuery = graphql`
   query indexQuery {
      contentfulPersonalSiteProfilePicture {
         id
         profilePic {
            fixed(height: 200) {
               ...GatsbyContentfulFixed
            }
         }
      }
      contentfulPersonalSiteAbout {
         blurb {
            json
         }
      }
      contentfulPersonalSiteResume {
         resume {
            file {
               url
            }
         }
      }
   }
`;

export default IndexPage;
