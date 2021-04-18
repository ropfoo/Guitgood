import React, {useReducer, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScaleInput from '../../Inputs/ScaleInput/ScaleInput';
import {
  initialScaleInputState,
  ScaleInputAction,
  scaleInputReducer,
} from '../../Inputs/ScaleInput/ScaleInputReducer';
import {useRandomNote} from '../../../hooks/useRandomNote';
import {notes} from '../_data/notes';
import AnswerOption from './AnswerOption';
import ProgressButton from './ProgressButtons';
import {useResultCheck} from '../../../hooks/useResultCheck';

const style = StyleSheet.create({
  questionWrapper: {
    justifyContent: 'space-between',
    height: '100%',
  },
  questionGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
  },
  answerOptions: {
    marginLeft: 30,
  },
  rootNote: {
    fontSize: 180,
    fontWeight: 'bold',
    width: '40%',
  },
});

const Question: React.FC = () => {
  const currentNote = useRandomNote(notes);
  const [noteInput, dispatch] = useReducer(
    scaleInputReducer,
    initialScaleInputState,
  );
  const {checkTriad} = useResultCheck(noteInput.values, currentNote);

  const checkResult = () => {
    const {answerTypes} = checkTriad();
    dispatch({
      type: ScaleInputAction.SHOW_WRONG_ANSWERS,
      payload: {...noteInput, answerTypes},
    });
  };

  return (
    <View style={style.questionWrapper}>
      <View style={style.questionGrid}>
        <Text style={style.rootNote}>{currentNote.name}</Text>
        <View style={style.answerOptions}>
          <AnswerOption showInput={dispatch} target={0} noteInput={noteInput} />
          <AnswerOption showInput={dispatch} target={1} noteInput={noteInput} />
        </View>
      </View>
      <View>
        <ProgressButton onSubmit={checkResult} />
        <ScaleInput
          setNoteValue={dispatch}
          target={noteInput.target}
          isActive={noteInput.active}
        />
      </View>
    </View>
  );
};

export default Question;
