import React from 'react';
import {useState} from 'react';
import {Pressable, Switch, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useQuestionSettingsContext} from '../../../provider/QuestionSettings.provider';
import {QuestionSettingsAction} from '../../../provider/QuestionSettingsReducer';
import CapToggleGroup, {
  ToggleOption,
} from '../../Inputs/CapToggleGroup/CapToggleGroup';
import {Scale} from '../_data/notes';

interface QuestionSettingsSheetProps {
  refElement: React.MutableRefObject<any>;
}

const QuestionSettingsSheet: React.FC<QuestionSettingsSheetProps> = ({
  refElement,
}) => {
  const {dispatch} = useQuestionSettingsContext();
  const [isEnabled, setIsEnabled] = useState(false);

  const options: ToggleOption[] = [
    {
      name: 'option 1',
      isActive: true,
    },
    {
      name: 'option 2',
      isActive: false,
    },
  ];
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
        <Text>click</Text>
        <CapToggleGroup options={options} />
      </Pressable>
    </RBSheet>
  );
};

export default QuestionSettingsSheet;
