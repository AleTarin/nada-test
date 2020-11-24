import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
const HighLightedItem = ({ data, row }) => {
  let { imageSrc, title } = data;
  console.log(row);
  return (
    <figure
      role="figure"
      aria-label={title}
      style={{ flex: 1 }}
      className="text-center"
    >
      <Image
        role="presentation"
        alt={title}
        className=""
        data-src={imageSrc}
        src={imageSrc}
        fluid
        roundedCircle
      />
      <figcaption>{title}</figcaption>
    </figure>
  );
};

export default HighLightedItem;
