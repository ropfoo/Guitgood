import React, {useEffect} from 'react';
import {Pressable, Text, TextStyle, View, ViewStyle} from 'react-native';
import {
    AnswerState,
  ScaleInputAction,
  ScaleInputReducer,
  ScaleInputState,
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
  noteInput: ScaleInputState;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  showInput,
  target,
  noteInput,
}) => {
    const targetNote = noteInput.values[target]
    const getBackground = () => {
        switch (targetNote.answerState) {
            case AnswerState.DEFAULT:
                return 'lightgrey'
            case AnswerState.ACTIVE:
                return 'lightgreen'
            case AnswerState.WRONG:
                return 'coral'
        
            default:
                return 'lightgrey'
        }
    }
  return (
    <Pressable
      style={{
        backgroundColor:getBackground(),
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
        <Text style={textStyle}>{noteInput.values[target]?.name}</Text>
      </View>
    </Pressable>
  );
};

export default AnswerOption;
