import React from 'react';
import "./MediumClap.css"

const ClapCount = ({count}) => {
  return (
    <span id="clap-count" className="clap-count">+ {count}</span>
  );
}

export default ClapCount;