import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import './footer.css';

const socialIcons = social => {
  switch (social) {
    case 'twitter':
      return <FaTwitter color="black" size={28} />;
    case 'github':
      return <FaGithub color="black" size={28} />;
    case 'linkedin':
      return <FaLinkedin color="black" size={28} />;
    case 'youtube':
      return <FaYoutube color="black" size={28} />;
    default:
      return;
  }
};

const Footer = ({ source }) => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            twitter
            linkedin
            github
            youtube
          }
        }
      }
    }
  `);
  return (
    <footer id="footer-container">
      <div>
        <ul className="social-links">
          {Object.keys(data.site.siteMetadata.social).map((s, i) => (
            <li className="social-links__li" key={i + s}>
              <a href={data.site.siteMetadata.social[s]}>{socialIcons(s)}</a>
            </li>
          ))}
        </ul>
      </div>
      <div id="copyright">© John Shen 2020</div>
    </footer>
  );
};

export default Footer;
