import React from 'react';
import {Pressable, Text} from 'react-native';

interface SettingsButtonProps {
  callback: () => void;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({callback}) => {
  return (
    <Pressable onPress={callback}>
      <Text>...</Text>
    </Pressable>
  );
};

export default SettingsButton;
