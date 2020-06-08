import React from 'react';
import FlareIcon from "@material-ui/icons/Flare";
import "./MediumClap.css";

const styles = {
  largeIcon: {
    width: 50,
    height: 50,
  },
  clicked: 'clicked'
};

const ClapIcon = ({isClicked}) => {
  return (
    <span className={`clap-icon ${isClicked && styles.clicked}`}>
      <FlareIcon style={styles.largeIcon}/> {isClicked}
    </span>
  );
}

export default ClapIcon;