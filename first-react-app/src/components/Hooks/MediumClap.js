import React, {useCallback, useLayoutEffect, useState} from 'react';
import ClapCount from "./ClapCount";
import CountTotal from "./CountTotal";
import ClapIcon from "./ClapIcon";
import "./MediumClap.css";
import {generateRandomNumber} from "../../utils/generateRandomNumber";
import mojs from 'mo-js';

const initialState = {
  count: 0,
  countTotal: generateRandomNumber(500, 1000),
  isClicked: false
}

/*
 * Custom Hook for Animation
 */
const timelineInitialState = new mojs.Timeline();
const useClapAnimation = ({
                            clapEl,
                            countEl,
                            clapTotalEl
                          }) => {

  const [animationTimeline, setAnimationTimeline] = useState(timelineInitialState);

  useLayoutEffect(() => {
    if(!clapEl || !countEl || !clapTotalEl) {
      return;
    }

    const tlDuration = 300;

    const scaleButton = new mojs.Html({
      el: clapEl,
      duration: tlDuration,
      scale: {1.3:1},
      easing: mojs.easing.ease.out
    })

    const triangleBurst = new mojs.Burst({
      parent: clapEl,
      radius: {50:95},
      count: 7,
      angle: 35,
      children: {
        shape: 'polygon',
        radius: {6:0},
        stroke: 'rgba(0,251,41,0.7)',
        strokeWidth: 2,
        angle: 210,
        delay: 30,
        speed: 0.2,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        duration: tlDuration
      }
    });

    const circleBurst = new mojs.Burst({
      parent: clapEl,
      radius: {50:75},
      count: 7,
      angle: 30,
      children: {
        shape: 'circle',
        radius: {3:0},
        stroke: 'rgba(70,252,187,0.7)',
        strokeWidth: 2,
        angle: 210,
        delay: 30,
        speed: 0.2,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        duration: tlDuration
      }
    });

    const countAnimation = new mojs.Html({
      el: countEl,
      opacity: {0: 1},
      delay: tlDuration / 2,
      duration: tlDuration,
      y: {0: -30}
    }).then({
      delay: (tlDuration / 2),
      y: -80,
      opacity: {1:0}
    });

    const countTotalAnimation = new mojs.Html({
      el: clapTotalEl,
      opacity: {0: 1},
      delay: (3 * tlDuration) / 2,
      duration: tlDuration,
      y: {0: -3}
    }).then({
      delay: (tlDuration / 2),
      y: -10,
      opacity: {1: 0}
    });

    if(typeof clapEl == "string") {
      const clap = document.getElementById('clap');
      clap.style.transform = 'scale(1,1)';
    }
    else {
      clapEl.style.transform = 'scale(1,1)';
    }
    const newAnimationTimeline = animationTimeline.add(
      triangleBurst,
      circleBurst,
      scaleButton,
      countAnimation,
      countTotalAnimation
    );
    setAnimationTimeline(newAnimationTimeline);

  }, [clapEl, countEl, clapTotalEl])
  return animationTimeline;
}

const MediumClap = () => {

  const MAX_USER_CLAPS = 50;
  const [clapState, setClapState] = useState(initialState);
  const { count, countTotal, isClicked } = clapState;

  /*
   *  {
   *    clapRef: node,
   *    countRef: node
   *  }
   */
  const [{clapRef, clapCountRef, clapTotalRef}, setRefState] = useState({});
  const setRef = useCallback((node) => {
    setRefState(prevRefState => ({
      ...prevRefState,
      [node.dataset.refkey]: node
    }))
  }, [])

  const animationTimeline = useClapAnimation({
    clapEl: clapRef,
    countEl: clapCountRef,
    clapTotalEl: clapTotalRef
  });

  const handleCapClick = () => {
    animationTimeline.replay();
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
    <button ref={setRef}
            data-refkey="clapRef"
            className="clap" onClick={handleCapClick}>
      <ClapIcon isClicked={isClicked}/>
      <ClapCount count={count} setRef={setRef} />
      <CountTotal countTotal={countTotal} setRef={setRef} />
    </button>
  );
}

/*
  Usage
 */

const Usage = () => {
  return <MediumClap/>;
}

export default Usage;

