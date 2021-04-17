import React, {useReducer, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScaleInput from '../../Inputs/ScaleInput/ScaleInput';
import {
  initialScaleInputState,
  scaleInputReducer,
} from '../../Inputs/ScaleInput/ScaleInputReducer';
import {useRandomNote} from '../../../hooks/useRandomNote';
import {notes} from '../_data/notes';
import AnswerOption from './AnswerOption';

const style = StyleSheet.create({
  questionWrapper: {
    justifyContent: 'space-between',
    height: '100%',
  },
  rootNote: {
    fontSize: 100,
    fontWeight: 'bold',
  },
});

const TriadQuiz: React.FC = () => {
  const currentNote = useRandomNote(notes);

  const [noteInput, dispatch] = useReducer(
    scaleInputReducer,
    initialScaleInputState,
  );

  return (
    <View style={style.questionWrapper}>
      <View>
        <Text style={style.rootNote}>{currentNote.name}</Text>
        <AnswerOption showInput={dispatch} target={0} noteInput={noteInput} />
        <AnswerOption showInput={dispatch} target={1} noteInput={noteInput} />
      </View>
      <ScaleInput
        setNoteValue={dispatch}
        target={noteInput.target}
        isActive={noteInput.active}
      />
    </View>
  );
};

export default TriadQuiz;
