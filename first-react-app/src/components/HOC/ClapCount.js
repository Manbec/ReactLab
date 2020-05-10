import React from 'react';
import "./MediumClap.css"

const ClapCount = ({count}) => {
  return (
    <span className="clap-count">+ {count}</span>
  );
}

export default ClapCount;