import React, {useReducer, useState, useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import ScaleInput from '../../Inputs/ScaleInput/ScaleInput';
import {
  ScaleInputAction,
  scaleInputReducer,
} from '../../Inputs/ScaleInput/ScaleInputReducer';
import {useRandomNote} from '../../../hooks/useRandomNote';
import {useResultCheck} from '../../../hooks/useResultCheck';
import {notes, Scale} from '../_data/notes';
import ProgressButton from './ProgressButtons';
import {style} from './styles/Question.style';
import AnswerOption from './AnswerOption';
import SuccessMessage from '../Messages/SuccessMessage/SuccessMessage';
import SettingsButton from '../../Settings/SettingsButton/SettingsButton';
import QuestionSettingsSheet from '../../Settings/QuestionSettingsSheet/QuestionSettingsSheet';
import {useQuestionSettingsContext} from '../../../provider/questionSettings/QuestionSettings.provider';
import {QuestionSettingsAction} from '../../../provider/questionSettings/QuestionSettingsReducer';

const Question: React.FC = () => {
  const {
    questionSettings,
    dispatchQuestionSettings,
  } = useQuestionSettingsContext();
  const {currentNote, generateRandomNote} = useRandomNote(notes);
  const [noteInput, dispatch] = useReducer(scaleInputReducer, {
    active: false,
    inputValue: '',
    target: 1,
    values: [
      {answerState: 0, name: currentNote.name},
      {answerState: 0, name: ''},
      {answerState: 0, name: ''},
    ],
  });
  const {checkTriad} = useResultCheck(noteInput.values, currentNote);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const reset = () => {
    setShowSuccessMsg(false);
    dispatch({type: ScaleInputAction.RESET_ANSWERS});
    generateRandomNote();
  };

  const checkResult = () => {
    const {answerTypes} = checkTriad(questionSettings.scaleType);
    dispatch({
      type: ScaleInputAction.SHOW_WRONG_ANSWERS,
      payload: {...noteInput, answerTypes},
    });
    const allResultsCorrect = answerTypes.length
      ? answerTypes.every(answerType => answerType.result === true)
      : false;
    allResultsCorrect && setShowSuccessMsg(true);
  };

  const getRandomScale = () =>
    Math.floor(Math.random() * 2) > 0 ? Scale.MINOR : Scale.MAJOR;

  useEffect(() => {
    dispatch({
      type: ScaleInputAction.UPDATE_ROOT_VALUE,
      payload: {
        ...noteInput,
        values: noteInput.values.map((value, index) => {
          if (index === 0) {
            value.name = currentNote.name;
          }
          return value;
        }),
      },
    });

    if (questionSettings.randomScale && dispatchQuestionSettings) {
      dispatchQuestionSettings({
        type: QuestionSettingsAction.UPDATE_SCALE_TYPE,
        payload: {scaleType: getRandomScale()},
      });
    }
  }, [currentNote, questionSettings.randomScale]);

  // Bottom Sheet
  const settingsSheet = useRef<any>(null);

  return (
    <View style={style.questionWrapper}>
      <View style={style.questionGrid}>
        <View style={style.questionContent}>
          <Text style={style.rootNote}>{currentNote.name}</Text>
          <Text style={style.scaleType}>
            {questionSettings.scaleType === Scale.MAJOR ? 'major' : 'minor'}
          </Text>
        </View>
        <View>
          <AnswerOption
            rootNote={currentNote}
            target={0}
            noteInput={noteInput}
          />
          <AnswerOption showInput={dispatch} target={1} noteInput={noteInput} />
          <AnswerOption showInput={dispatch} target={2} noteInput={noteInput} />
        </View>
      </View>
      <SuccessMessage
        message="Nice!"
        toggle={showSuccessMsg}
        onFadeIn={reset}
      />
      <View>
        <View style={style.menuSection}>
          <SettingsButton callback={() => settingsSheet.current.open()} />
          <ProgressButton disabled={showSuccessMsg} onSubmit={checkResult} />
        </View>
        <ScaleInput
          setNoteValue={dispatch}
          target={noteInput.target}
          isActive={noteInput.active}
        />
      </View>
      <QuestionSettingsSheet refElement={settingsSheet} />
    </View>
  );
};

export default Question;
