import React from 'react';
import {View} from 'react-native';
import CapToggleGroupOption from './CapToggleGroupOption';

export interface ToggleOption {
  name: string;
  isActive: boolean;
}

interface CapToggleGroupProps {
  options: ToggleOption[];
}

const CapToggleGroup: React.FC<CapToggleGroupProps> = ({options}) => {
  return (
    <View>
      {options.map(option => (
        <CapToggleGroupOption key={option.name} option={option} />
      ))}
    </View>
  );
};

export default CapToggleGroup;
