import React from 'react';
import {Text, View} from 'react-native';

interface SettingsSectionProps {
  title: string;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({title}) => {
  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  );
};

export default SettingsSection;
