import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {style} from './styles/ProgressButton.style';

interface ProgressButtonProps {
  onSubmit: () => void;
  disabled?: boolean;
}

const ProgressButton: React.FC<ProgressButtonProps> = ({
  onSubmit,
  disabled = false,
}) => {
  return (
    <View style={style.wrapper}>
      <Pressable
        disabled={disabled}
        style={style.buttonContainer}
        onPress={onSubmit}>
        <Text style={style.buttonText}>next</Text>
      </Pressable>
    </View>
  );
};

export default ProgressButton;
