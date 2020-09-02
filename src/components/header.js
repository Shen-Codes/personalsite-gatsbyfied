import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.css';
import Image from './image.js';

const Header = ({ siteMenu, toggleModal, source }) => (
   <header>
      <div id="logo-div">
         <Image source={source} />
      </div>
      <div id="link-div">
         {siteMenu.map(menuItem => (
            <Link className="link" to={menuItem.path} key={menuItem.name}>
               {menuItem.name}
            </Link>
         ))}
      </div>
      <button onClick={() => toggleModal(true)}>Contact Me</button>
   </header>
);

Header.propTypes = {
   siteMenu: PropTypes.string,
   toggleModal: PropTypes.func
};

Header.defaultProps = {
   siteTitle: ``
};

export default Header;
