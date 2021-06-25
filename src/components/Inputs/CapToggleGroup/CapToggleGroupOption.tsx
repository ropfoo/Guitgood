import React from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {ToggleOption} from './CapToggleGroup';
import {style, styleActive} from './CapToggleGroupOption.style';

interface CapToggleGroupOptionProps {
  option: ToggleOption;
  customStyle: StyleProp<ViewStyle>;
}

const CapToggleGroupOption: React.FC<CapToggleGroupOptionProps> = ({
  option,
  customStyle,
}) => {
  const getStyle = option.isActive ? styleActive : style;
  return (
    <View style={[getStyle.wrapper, customStyle]}>
      <Pressable style={getStyle.optionContainer} onPress={option.update}>
        <Text style={getStyle.optionText}>{option.name}</Text>
      </Pressable>
    </View>
  );
};

export default CapToggleGroupOption;
