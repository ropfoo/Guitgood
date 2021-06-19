import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {style} from './styles/AnswerOption.style';
import {
  AnswerState,
  ScaleInputAction,
  ScaleInputReducer,
  ScaleInputState,
  ScaleInputValue,
} from '../../Inputs/ScaleInput/ScaleInputReducer';
import {note} from '../_data/notes';

interface AnswerOptionProps {
  showInput?: React.Dispatch<ScaleInputReducer>;
  target: number;
  noteInput: ScaleInputState;
  rootNote?: note;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  showInput,
  target,
  noteInput,
  rootNote,
}) => {
  const targetNote = noteInput.values[target];
  const getBackground = (targetNote: ScaleInputValue) => {
    switch (targetNote?.answerState) {
      case AnswerState.DEFAULT:
        return 'lightgrey';
      case AnswerState.ACTIVE:
        return 'lightgreen';
      case AnswerState.WRONG:
        return 'coral';
      default:
        return 'lightgrey';
    }
  };

  return (
    <Pressable
      style={{...style.pressable, backgroundColor: getBackground(targetNote)}}
      onPress={() =>
        showInput &&
        showInput({
          type: ScaleInputAction.SHOW_INPUT,
          payload: {...noteInput, target},
        })
      }>
      <View style={style.wrapper}>
        <Text style={style.text}>
          {rootNote ? rootNote.name : noteInput.values[target]?.name}
        </Text>
      </View>
    </Pressable>
  );
};

export default AnswerOption;
