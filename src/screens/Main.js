import React from 'react';
import PropTypes from 'prop-types';

MainScreen.propTypes = {
  children: PropTypes.node
};

function MainScreen({ children }) {
  return (
    <StyledWrapper>
      <StyledInnerWrapper>{children}</StyledInnerWrapper>
    </StyledWrapper>
  );
}

export default MainScreen;

const StyledWrapper = props => (
  <div className="flex flex-column system-sans-serif" {...props}>
    {props.children}
  </div>
);

const StyledInnerWrapper = props => (
  <div className="flex flex-column system-sans-serif" {...props}>
    {props.children}
  </div>
);
