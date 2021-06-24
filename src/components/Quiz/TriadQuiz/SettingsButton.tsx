import React from 'react';
import {Pressable, Text} from 'react-native';
import {style} from './styles/SettingsButton.style';

interface SettingsButtonProps {
  callback: () => void;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({callback}) => {
  return (
    <Pressable onPress={callback} style={style.wrapper}>
      <Text style={style.inner}>...</Text>
    </Pressable>
  );
};

export default SettingsButton;
