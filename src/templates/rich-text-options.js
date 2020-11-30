import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';

const options = {
	renderNode: {
	  [BLOCKS.PARAGRAPH]: (node, children) => {
		 if (
			node.content[0].marks.length >= 1 &&
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
	  [BLOCKS.UL_LIST]: (node, children) => (
		  <ul className="blog-post--ul">{children}</ul>
	  ),
	  [BLOCKS.LIST_ITEM]: (node, children) => (
			<li className="blog-post--li"><span>{children}</span></li>
	  ),
	  [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
		 <div className="blog-post--embedAsset">
			<img
			  src={`https://${node.data.target.fields.file['en-US'].url}`}
			  alt="gif"
			/>
		 </div>
	  )
	}
}

export default options;

