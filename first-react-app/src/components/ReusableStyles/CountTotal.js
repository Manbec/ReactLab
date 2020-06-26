import React, {useContext} from 'react';
import {MediumClapContext} from "./MediumClapContext";
import styles from "./MediumClap.module.css";

const CountTotal = ({style: userStyles = {}}, className) => {
  const {countTotal, setRef} = useContext(MediumClapContext);
  const classNames = [styles.countTotal, className].join(' ').trim();
  console.log("chuntaro ", userStyles );
  return (
    <span ref={setRef}
          data-refkey="clapTotalRef"
          className={classNames}
          style={userStyles}>{countTotal}</span>
  );
}

export default CountTotal;