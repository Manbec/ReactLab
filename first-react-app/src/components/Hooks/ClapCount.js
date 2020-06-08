import React from 'react';
import "./MediumClap.css"

const ClapCount = ({count, setRef}) => {
  return (
    <span ref={setRef} data-refkey="clapCountRef" className="clap-count">+ {count}</span>
  );
}

export default ClapCount;