import React from 'react';
import {View} from 'react-native';
import CapToggleGroupOption from './CapToggleGroupOption';
import {style} from './CapToggleGroup.style';

export interface ToggleOption {
  name: string;
  isActive: boolean;
  id: number | string;
  update: () => void;
}

interface CapToggleGroupProps {
  options: ToggleOption[];
}

const CapToggleGroup: React.FC<CapToggleGroupProps> = ({options}) => {
  return (
    <View style={style.wrapper}>
      {options.map((option, index) => (
        <CapToggleGroupOption
          customStyle={index !== options.length - 1 && {marginRight: 12}}
          key={option.id}
          option={option}
        />
      ))}
    </View>
  );
};

export default CapToggleGroup;
