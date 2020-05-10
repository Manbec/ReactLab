import React, {useState} from 'react';
import ClapCount from "./ClapCount";
import CountTotal from "./CountTotal";
import ClapIcon from "./ClapIcon";
import "./MediumClap.css";
import {generateRandomNumber} from "../../utils/generateRandomNumber";

const initialState = {
  count: 0,
  countTotal: generateRandomNumber(500, 1000),
  isClicked: false
}

const MediumClap = () => {
  const MAX_USER_CLAPS = 50;
  const [clapState, setClapState] = useState(initialState);
  const { count, countTotal, isClicked } = clapState;
  console.log("SSTAAT ", clapState);
  const handleCapClick = () => {
    setClapState(prevState => ({
      isClicked: true,
      count: Math.min(prevState.count + 1, MAX_USER_CLAPS),
      countTotal:
        prevState.count < MAX_USER_CLAPS ?
          prevState.countTotal + 1 :
          prevState.countTotal
    }));
  }

  return (
    <button className="clap" onClick={handleCapClick}>
      <ClapIcon isClicked={isClicked}/>
      <ClapCount count={count} />
      <CountTotal countTotal={countTotal}/>
    </button>
  );
}

export default MediumClap;