import React from 'react';
import Img from 'gatsby-image';

const Image = ({ source }) => {
  return (
    <>
      {source.fluid && <Img fluid={source.fluid} />}
      {source.fixed && <Img fixed={source.fixed} />}
      {source.sizes && <Img sizes={source.sizes} />}
    </>
  );
};

export default Image;
