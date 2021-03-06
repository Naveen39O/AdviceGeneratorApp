import React from 'react';
import {isMobile} from 'react-device-detect';

function PatternDivider(props) {
  return (
    <div>
      {isMobile ? 
          <img src= "images/pattern-divider-mobile.svg" alt = "pattern divider"/>
        : <img src= "images/pattern-divider-desktop.svg" alt = "pattern divider"/>}
    </div>
  );
}

export default PatternDivider;