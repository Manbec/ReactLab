import React, {useContext} from 'react';
import FlareIcon from "@material-ui/icons/Flare";
import styles from "./MediumClap.module.css";
import {MediumClapContext} from "./MediumClapContext";

const mstyles = {
  largeIcon: {
    width: 50,
    height: 50,
  },
  clicked: 'clicked'
};

const ClapIcon = ({style: userStyles = {}, className}) => {
  const {isClicked} = useContext(MediumClapContext);
  const classNames = [styles.icon, isClicked ? mstyles.clicked : '', className].join(' ').trim();
  return (
    <span className={classNames}
    style={userStyles}>
      <FlareIcon style={mstyles.largeIcon}/> {isClicked}
    </span>
  );
}

export default ClapIcon;