import React from 'react';

const CountTotal = ({countTotal, setRef}) => {
  return (
    <span ref={setRef} data-refkey="clapTotalRef" className="count-total">{countTotal}</span>
  );
}

export default CountTotal;