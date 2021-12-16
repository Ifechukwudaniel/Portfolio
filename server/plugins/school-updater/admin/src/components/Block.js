import React from "react";
import PropTypes from "prop-types";
import Wrapper from "./Wrapper";

const Block = ({ children }) => (
  <div className="col-md-12">
    <Wrapper>{children}</Wrapper>
  </div>
);

Block.defaultProps = {
  children: null,
};

Block.propTypes = {
  children: PropTypes.any,
};

export default Block;
