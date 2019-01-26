import React from "react";

import { Link as GatsbyLink } from "gatsby";
import { isInternalLink } from "is-internal-link";

const Link = ({ children, to, activeClassName, ...other }) => {
  if (isInternalLink(to)) {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} target="_blank" {...other}>
      {children}
    </a>
  );
};

export default Link;