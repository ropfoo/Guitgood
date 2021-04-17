import React, {useReducer, useState} from 'react';
import {Text, View} from 'react-native';
import ScaleInput from '../../Inputs/ScaleInput/ScaleInput';
import {
  initialScaleInputState,
  scaleInputReducer,
} from '../../Inputs/ScaleInput/ScaleInputReducer';
import {useRandomNote} from '../../../hooks/useRandomNote';
import {notes} from '../_data/notes';
import AnswerOption from './AnswerOption';

const TriadQuiz: React.FC = () => {
  const currentNote = useRandomNote(notes);

  const [noteInput, dispatch] = useReducer(
    scaleInputReducer,
    initialScaleInputState,
  );

  return (
    <View>
      <Text>{currentNote.name}</Text>
      <AnswerOption showInput={dispatch} target={0} noteInput={noteInput} />
      <AnswerOption showInput={dispatch} target={1} noteInput={noteInput} />
      <AnswerOption showInput={dispatch} target={2} noteInput={noteInput} />
      {noteInput.active && (
        <ScaleInput setNoteValue={dispatch} target={noteInput.target} />
      )}
    </View>
  );
};

export default TriadQuiz;
