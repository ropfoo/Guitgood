import React from 'react';
import {Pressable, Text} from 'react-native';
import {
  ScaleInputAction,
  ScaleInputReducer,
} from '../../Inputs/ScaleInput/ScaleInputReducer';

interface AnswerOptionProps {
  showInput: React.Dispatch<ScaleInputReducer>;
  target: number;
  noteInput: any;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  showInput,
  target,
  noteInput,
}) => {
  return (
    <Pressable
      style={{
        backgroundColor:
          noteInput.target === target ? 'lightgreen' : 'lightgrey',
      }}
      onPress={() =>
        showInput({
          type: ScaleInputAction.SHOW_INPUT,
          payload: {...noteInput, target},
        })
      }>
      <Text>{noteInput.values[target]}</Text>
    </Pressable>
  );
};

export default AnswerOption;
