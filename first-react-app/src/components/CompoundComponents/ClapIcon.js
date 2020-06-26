import React, {useContext} from 'react';
import FlareIcon from "@material-ui/icons/Flare";
import "./MediumClap.css";
import {MediumClapContext} from "./MediumClapContext";

const styles = {
  largeIcon: {
    width: 50,
    height: 50,
  },
  clicked: 'clicked'
};

const ClapIcon = () => {
  const {isClicked} = useContext(MediumClapContext);
  return (
    <span className={`clap-icon ${isClicked && styles.clicked}`}>
      <FlareIcon style={styles.largeIcon}/> {isClicked}
    </span>
  );
}

export default ClapIcon;