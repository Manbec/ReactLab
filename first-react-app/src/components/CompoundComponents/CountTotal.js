import React, {useContext} from 'react';
import {MediumClapContext} from "./MediumClapContext";

const CountTotal = () => {
  const {countTotal, setRef} = useContext(MediumClapContext);
  return (
    <span ref={setRef} data-refkey="clapTotalRef" className="count-total">{countTotal}</span>
  );
}

export default CountTotal;