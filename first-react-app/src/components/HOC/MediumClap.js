import React, {Component, useState} from 'react';
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
  Higher Order Component
 */

const withClapAnimation = WrappedComponent => {

  class WithClapAnimation extends Component {
    animationTimeline = new mojs.Timeline();
    state = {
      animationTimeline: this.animationTimeline
    }

    componentDidMount() {
      const tlDuration = 300;

      const scaleButton = new mojs.Html({
        el: '#clap',
        duration: tlDuration,
        scale: {1.3:1},
        easing: mojs.easing.ease.out
      })

      const triangleBurst = new mojs.Burst({
        parent: '#clap',
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
        parent: '#clap',
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
        el: '#clap-count',
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
        el: '#clap-count-total',
        opacity: {0: 1},
        delay: (3 * tlDuration) / 2,
        duration: tlDuration,
        y: {0: -3}
      }).then({
        delay: (tlDuration / 2),
        y: -10,
        opacity: {1: 0}
      });

      const clap = document.getElementById('clap')
      clap.style.transform = 'scale(1 ,1)';

      const newAnimationTimeline = this.animationTimeline.add(
        triangleBurst,
        circleBurst,
        scaleButton,
        countAnimation,
        countTotalAnimation
      );
      this.setState({animationTimeline: newAnimationTimeline});
    }

    render() {
      return <WrappedComponent {...this.props}
                               animationTimeline={this.state.animationTimeline}/>
    }

  }

  return WithClapAnimation;

}

const MediumClap = ({animationTimeline}) => {

  const MAX_USER_CLAPS = 50;
  const [clapState, setClapState] = useState(initialState);
  const { count, countTotal, isClicked } = clapState;

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
    <button id="clap" className="clap" onClick={handleCapClick}>
      <ClapIcon isClicked={isClicked}/>
      <ClapCount count={count} />
      <CountTotal countTotal={countTotal}/>
    </button>
  );
}

/*
  Usage
 */

const Usage = () => {
  const AnimatedMediumClap = withClapAnimation(MediumClap);
  return <AnimatedMediumClap />;
}

export default Usage;

