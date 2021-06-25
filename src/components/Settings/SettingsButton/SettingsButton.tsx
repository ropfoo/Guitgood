import React from 'react';
import {Pressable, Text} from 'react-native';
import {style} from './SettingsButton.style';
import Icon from 'react-native-ionicons';

interface SettingsButtonProps {
  callback: () => void;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({callback}) => {
  return (
    <Pressable onPress={callback} style={style.wrapper}>
      <Icon name="settings" style={{color: 'white'}} />
    </Pressable>
  );
};

export default SettingsButton;
