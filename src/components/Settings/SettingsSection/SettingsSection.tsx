import React from 'react';
import {Text, View} from 'react-native';
import {style} from './SettingsSection.style';

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({title, children}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
};

export default SettingsSection;
