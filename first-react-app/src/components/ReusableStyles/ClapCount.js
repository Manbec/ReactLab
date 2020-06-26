import React, {useContext} from 'react';
import "./MediumClap.module.css"
import {MediumClapContext} from "./MediumClapContext";
import styles from './MediumClap.module.css';

const ClapCount = ({style: userStyles = {}}, className) => {
  const {count, setRef} = useContext(MediumClapContext);
  const classNames = [styles.count, className].join(' ').trim();
  return (
    <span ref={setRef}
          data-refkey="clapCountRef"
          className={classNames}
          style={userStyles}>+ {count}</span>
  );
}

export default ClapCount;