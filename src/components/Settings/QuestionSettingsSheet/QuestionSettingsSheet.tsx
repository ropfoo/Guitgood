import React from 'react';
import {View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useQuestionSettingsContext} from '../../../provider/questionSettings/QuestionSettings.provider';
import {QuestionSettingsAction} from '../../../provider/questionSettings/QuestionSettingsReducer';
import CapToggleGroup from '../../Inputs/CapToggleGroup/CapToggleGroup';
import LabledSwitch from '../../Inputs/LabledSwitch/LabledSwitch';
import SettingsSection from '../SettingsSection/SettingsSection';
import {style, sheetStyle} from './QuestionSettingsSheet.style';

interface QuestionSettingsSheetProps {
  refElement: React.MutableRefObject<any>;
}

const QuestionSettingsSheet: React.FC<QuestionSettingsSheetProps> = ({
  refElement,
}) => {
  const {
    questionSettings,
    dispatchQuestionSettings,
  } = useQuestionSettingsContext();

  return (
    <RBSheet
      ref={refElement}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={sheetStyle}
      height={350}>
      <View style={style.inner}>
        <SettingsSection title="Scale">
          <CapToggleGroup options={questionSettings.scaleTypeOptions} />
          <LabledSwitch
            label="Random"
            toggleEvent={(enable: boolean) =>
              dispatchQuestionSettings &&
              dispatchQuestionSettings({
                type: QuestionSettingsAction.SET_RANDOM_SCALE,
                payload: {randomScale: enable},
              })
            }
          />
        </SettingsSection>
      </View>
    </RBSheet>
  );
};

export default QuestionSettingsSheet;
