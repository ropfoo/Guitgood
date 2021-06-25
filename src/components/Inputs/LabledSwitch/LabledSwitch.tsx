import React, {useEffect, useState} from 'react';
import {Switch, Text, View} from 'react-native';
import {Colors} from '../../../global/colors';
import {style} from './LabledSwitch.style';

interface LabledSwitchProps {
  label: string;
  toggleEvent: (enable: boolean) => void;
}

const LabledSwitch: React.FC<LabledSwitchProps> = ({label, toggleEvent}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    toggleEvent(isEnabled);
  }, [isEnabled]);

  return (
    <View style={style.wrapper}>
      <Text style={style.text}>{label}</Text>
      <Switch
        trackColor={{false: Colors.lightgrey, true: Colors.darkBlue}}
        thumbColor={Colors.white}
        ios_backgroundColor={Colors.lightgrey}
        onValueChange={() => setIsEnabled(enabled => !enabled)}
        value={isEnabled}
      />
    </View>
  );
};

export default LabledSwitch;
