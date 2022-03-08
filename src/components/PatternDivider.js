import React from 'react';
import {isMobile} from 'react-device-detect';

function PatternDivider(props) {
  return (
    <div>
      {isMobile ? 
          <img src= "/images/pattern-divider-mobile.svg"/>
        : <img src= "/images/pattern-divider-desktop.svg"/>}
    </div>
  );
}

export default PatternDivider;