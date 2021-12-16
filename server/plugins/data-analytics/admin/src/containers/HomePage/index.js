/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";
import Container from "strapi-plugin-upload/admin/src/components/Container";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";

const HomePage = () => {
  return (
    <Container>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p>
    </Container>
  );
};

export default memo(HomePage);
