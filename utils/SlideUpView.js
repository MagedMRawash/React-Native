import React from 'react';
import {
  Animated,
  TouchableOpacity
} from 'react-native';

export default class SlideUpView extends React.Component {
  state = {
    slideAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  startAnim = () => {
    Animated.timing(                  // Animate over time
      this.state.slideAnim,            // The animated value to drive
      {
        toValue: -700,                   // Animate to opacity: 1 (opaque)
        duration: 1700,              // Make it take a while
      }
    ).start( );
  }

  render() {
    let { slideAnim } = this.state;

    return (

        <Animated.View              // Special animatable View
          style={{
            ...this.props.style,
            top: slideAnim,         // Bind opacity to animated value
          }}

        >
          {this.props.children}
        </Animated.View>

    );
  }
}