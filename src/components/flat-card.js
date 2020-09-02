import React from 'react';
import { Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './flat-card.css';
import Image from './image';
import datePretty from './date-pretty';

const FlatCard = props => {
   const summary = documentToReactComponents(props.summary);

   const createdAt = datePretty(new Date(props.createdAt));
   const updatedAt = datePretty(new Date(props.updatedAt));

   return (
      <Link id="flat-card__link" to={props.slug}>
         <div className="flat-card">
            {/* <Image source={props.source} /> */}

            <div className="flat-card__text-div">
               <h3>{props.title}</h3>
               {summary}
            </div>
            <span className="flat-card__meta-span">
               <h6 className="flat-card__meta-span--h6">
                  Created on {createdAt}
               </h6>
               <h6 className="flat-card__meta-span--h6">
                  Updated on {updatedAt}
               </h6>
            </span>
         </div>
      </Link>
   );
};

export default FlatCard;
