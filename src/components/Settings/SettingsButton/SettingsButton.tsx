import React from 'react';
import * as S from './SettingsButton.style';
import Icon from 'react-native-ionicons';

interface SettingsButtonProps {
  callback: () => void;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({callback}) => {
  return (
    <S.SettingsButton onPress={callback}>
      <Icon name="settings" style={{color: 'white'}} />
    </S.SettingsButton>
  );
};

export default SettingsButton;
