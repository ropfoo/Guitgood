import React, {useState} from 'react';
import {Pressable, Switch, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useQuestionSettingsContext} from '../../../provider/questionSettings/QuestionSettings.provider';
import {QuestionSettingsAction} from '../../../provider/questionSettings/QuestionSettingsReducer';
import CapToggleGroup from '../../Inputs/CapToggleGroup/CapToggleGroup';

interface QuestionSettingsSheetProps {
  refElement: React.MutableRefObject<any>;
}

const QuestionSettingsSheet: React.FC<QuestionSettingsSheetProps> = ({
  refElement,
}) => {
  const {questionSettings, dispatch} = useQuestionSettingsContext();
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <RBSheet
      ref={refElement}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.2)',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}>
      <Text>Hello Settings</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsEnabled(enabled => !enabled)}
        value={isEnabled}
      />
      <Pressable
        onPress={() => {
          dispatch &&
            dispatch({type: QuestionSettingsAction.TOGGLE_SCALE_TYPE});
        }}>
        <CapToggleGroup options={questionSettings.scaleTypeOptions} />
      </Pressable>
    </RBSheet>
  );
};

export default QuestionSettingsSheet;
