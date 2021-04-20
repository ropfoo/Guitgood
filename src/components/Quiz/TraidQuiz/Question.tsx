import React, {useReducer, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import ScaleInput from '../../Inputs/ScaleInput/ScaleInput';
import {
  initialScaleInputState,
  ScaleInputAction,
  scaleInputReducer,
} from '../../Inputs/ScaleInput/ScaleInputReducer';
import {useRandomNote} from '../../../hooks/useRandomNote';
import {notes, Scale, ScaleType} from '../_data/notes';
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
    height: 450,
  },
  answerOptions: {
    marginLeft: 30,
  },
  questionContent: {
    width: '40%',
    flexDirection: 'column',
    alignItems: 'center',
    height: 200,
  },
  rootNote: {
    fontSize: 180,
    fontWeight: 'bold',
  },
  scaleType: {
    fontSize: 40,
  },
  messsage: {
    color: 'lightgreen',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
  },
});

const Question: React.FC = () => {
  const [scaleType, setScaleType] = useState<ScaleType>(Scale.MAJOR);
  const {currentNote, generateRandomNote} = useRandomNote(notes);
  const [noteInput, dispatch] = useReducer(
    scaleInputReducer,
    initialScaleInputState,
  );
  const {checkTriad} = useResultCheck(noteInput.values, currentNote);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const reset = () => {
    setShowSuccessMsg(false);
    generateRandomNote();
    dispatch({type: ScaleInputAction.RESET_ANSWERS});
  };

  const checkResult = () => {
    const {answerTypes} = checkTriad(scaleType);
    dispatch({
      type: ScaleInputAction.SHOW_WRONG_ANSWERS,
      payload: {...noteInput, answerTypes},
    });
    const allResultsCorrect = answerTypes.every(
      answerType => answerType.result === true,
    );
    if (allResultsCorrect) {
      setShowSuccessMsg(true);
      setTimeout(reset, 1000);
    }
  };

  return (
    <View style={style.questionWrapper}>
      <View style={style.questionGrid}>
        <View style={style.questionContent}>
          <Text style={style.rootNote}>{currentNote.name}</Text>
          <Text style={style.scaleType}>
            {scaleType === Scale.MAJOR ? 'major' : 'minor'}
          </Text>
        </View>
        <View style={style.answerOptions}>
          <AnswerOption
            rootNote={currentNote}
            target={0}
            noteInput={noteInput}
          />
          <AnswerOption showInput={dispatch} target={1} noteInput={noteInput} />
          <AnswerOption showInput={dispatch} target={2} noteInput={noteInput} />
        </View>
      </View>
      <Button title="switch scale" onPress={() => setScaleType(Scale.MINOR)} />
      {showSuccessMsg && <Text style={style.messsage}>Success</Text>}
      <View>
        <ProgressButton disabled={showSuccessMsg} onSubmit={checkResult} />
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
