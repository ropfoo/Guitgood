import React, {useState} from 'react';
import {Switch, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useQuestionSettingsContext} from '../../../provider/questionSettings/QuestionSettings.provider';
import CapToggleGroup from '../../Inputs/CapToggleGroup/CapToggleGroup';
import SettingsSection from '../SettingsSection/SettingsSection';
import {style, sheetStyle} from './QuestionSettingsSheet.style';

interface QuestionSettingsSheetProps {
  refElement: React.MutableRefObject<any>;
}

const QuestionSettingsSheet: React.FC<QuestionSettingsSheetProps> = ({
  refElement,
}) => {
  const {questionSettings} = useQuestionSettingsContext();
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <RBSheet
      ref={refElement}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={sheetStyle}>
      <View style={style.inner}>
        <SettingsSection title="Scale">
          <CapToggleGroup options={questionSettings.scaleTypeOptions} />
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsEnabled(enabled => !enabled)}
            value={isEnabled}
          />
        </SettingsSection>
      </View>
    </RBSheet>
  );
};

export default QuestionSettingsSheet;
