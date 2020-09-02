/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import ContactModal from './contact-modal';
import Footer from './footer';

const Layout = ({ props, children }) => {
   const data = useStaticQuery(graphql`
      query SiteTitleQuery {
         site {
            siteMetadata {
               title
               menu {
                  name
                  path
               }
            }
         }
         contentfulPersonalSiteLogo {
            logo {
               fixed(
                  height: 30

                  width: 100
               ) {
                  ...GatsbyContentfulFixed
               }
            }
         }
      }
   `);

   const [toggleModal, setToggleModal] = useState(false);

   return (
      <div>
         <Header
            siteMenu={data.site.siteMetadata.menu}
            toggleModal={setToggleModal}
            source={data.contentfulPersonalSiteLogo.logo}
         />

         {toggleModal && <ContactModal toggle={setToggleModal} />}
         <main id="layout-container">{children}</main>

         <Footer source={data.contentfulPersonalSiteLogo.logo} />
      </div>
   );
};

export default Layout;
