import React from 'react';
import Image from './image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { GoMarkGithub, GoLinkExternal } from 'react-icons/go';
import './card.css';

const Card = props => {
   const options = {
      renderNode: {
         [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="card--p">{children}</p>
         )
      }
   };

   const summary = documentToReactComponents(props.summary, options);

   return (
      <div className="card" key={props.title}>
         <div id="card-image-div">
            <Image source={props.source} />
         </div>
         <h2 className="card--h2">{props.title}</h2>
         {summary}
         <div className="card__links">
            {props.github && (
               <a href={props.github}>
                  <GoMarkGithub color="black" size={28} />
               </a>
            )}
            {props.siteLink && (
               <a href={props.siteLink}>
                  <GoLinkExternal color="black" size={28} />
               </a>
            )}
         </div>
      </div>
   );
};

export default Card;
