import React from 'react';
import {Pressable, Text} from 'react-native';
import {ToggleOption} from './CapToggleGroup';
import {style} from './style/CapToggleGroupOption.style';

interface CapToggleGroupOptionProps {
  option: ToggleOption;
}

const CapToggleGroupOption: React.FC<CapToggleGroupOptionProps> = ({
  option,
}) => {
  return (
    <Pressable>
      <Text style={option.isActive && style.isActive}>{option.name}</Text>
    </Pressable>
  );
};

export default CapToggleGroupOption;
