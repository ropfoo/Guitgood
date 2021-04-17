import React from 'react';
import {Pressable, Text, TextStyle, View, ViewStyle} from 'react-native';
import {
  ScaleInputAction,
  ScaleInputReducer,
} from '../../Inputs/ScaleInput/ScaleInputReducer';

const viewStyle: ViewStyle = {
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center',
};

const textStyle: TextStyle = {
  fontSize: 20,
  fontWeight: 'bold',
};

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
        marginBottom: 5,
        width: 50,
      }}
      onPress={() =>
        showInput({
          type: ScaleInputAction.SHOW_INPUT,
          payload: {...noteInput, target},
        })
      }>
      <View style={viewStyle}>
        <Text style={textStyle}>{noteInput.values[target]}</Text>
      </View>
    </Pressable>
  );
};

export default AnswerOption;
