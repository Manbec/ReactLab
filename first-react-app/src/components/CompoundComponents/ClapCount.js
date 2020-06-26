import React, {useContext} from 'react';
import "./MediumClap.css"
import {MediumClapContext} from "./MediumClapContext";

const ClapCount = () => {
  const {count, setRef} = useContext(MediumClapContext);
  return (
    <span ref={setRef} data-refkey="clapCountRef" className="clap-count">+ {count}</span>
  );
}

export default ClapCount;