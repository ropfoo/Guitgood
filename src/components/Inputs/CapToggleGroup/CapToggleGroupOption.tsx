import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {ToggleOption} from './CapToggleGroup';
import {style, styleActive} from './CapToggleGroupOption.style';

interface CapToggleGroupOptionProps {
  option: ToggleOption;
}

const CapToggleGroupOption: React.FC<CapToggleGroupOptionProps> = ({
  option,
}) => {
  const getStyle = option.isActive ? styleActive : style;
  return (
    <View style={getStyle.wrapper}>
      <Pressable style={getStyle.optionContainer} onPress={option.update}>
        <Text style={getStyle.optionText}>{option.name}</Text>
      </Pressable>
    </View>
  );
};

export default CapToggleGroupOption;
