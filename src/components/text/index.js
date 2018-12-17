import React from 'react';
import PropTypes from 'prop-types';

BasicText.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
  role: PropTypes.string,
  style: PropTypes.object
};

function BasicText({ children, ...props }) {
  return <TextWrapper {...props}>{children}</TextWrapper>;
}

export default BasicText;

const TextWrapper = props => (
  <p className="f5 measure lh-copy" {...props}>
    {props.children}
  </p>
);
