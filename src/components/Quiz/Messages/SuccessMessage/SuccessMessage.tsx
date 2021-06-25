import React, {useRef, useEffect} from 'react';
import {Animated, Text} from 'react-native';
import {Easing} from 'react-native-reanimated';
import {style} from './SuccessMessage.style';

interface SuccessMessageProps {
  message: string;
  toggle: boolean;
  onFadeIn: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  message,
  toggle = false,
  onFadeIn,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const duration = 700;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 2,
      duration,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start(onFadeIn);
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: duration * 0.6,
      delay: duration,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    toggle ? fadeIn() : fadeOut();
  }, [toggle]);

  return (
    <Animated.View
      style={[
        style.messsageWrapper,
        {
          transform: [{scale: fadeAnim}],
        },
      ]}>
      <Text style={style.messsageText}>{message}</Text>
    </Animated.View>
  );
};

export default SuccessMessage;
