import React, {useEffect} from 'react';
import {Pressable, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {
    AnswerState,
  ScaleInputAction,
  ScaleInputReducer,
  ScaleInputState,
  ScaleInputValue,
} from '../../Inputs/ScaleInput/ScaleInputReducer';


const style = StyleSheet.create({
    pressable: {
        marginBottom: 20,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80
    },
    wrapper: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

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
    const getBackground = (targetNote: ScaleInputValue) => {
        switch (targetNote?.answerState) {
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

    useEffect(()=>{
        getBackground(noteInput.values[target])
        console.log(noteInput)
    }, [noteInput, target])

  return (
    <Pressable
      style={{...style.pressable,
        backgroundColor:getBackground(targetNote),
      }}
      onPress={() =>
        showInput({
          type: ScaleInputAction.SHOW_INPUT,
          payload: {...noteInput, target},
        })
      }>
      <View style={style.wrapper}>
        <Text style={style.text}>{noteInput.values[target]?.name}</Text>
      </View>
    </Pressable>
  );
};

export default AnswerOption;
