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
				<div id="flat-card__image">
					<Image  source={props.source} />
				</div>
				<div className="flat-card__text-div">     
					<div >
						<h3>{props.title}</h3>
						{summary}
					</div>
					<span className="flat-card__meta-span">
						<p className="flat-card__meta-span--p">
							Created on {createdAt}
						</p>
						<p className="flat-card__meta-span--p">
							Updated on {updatedAt}
						</p>
					</span>
				</div>
         </div>
      </Link>
   );
};

export default FlatCard;
