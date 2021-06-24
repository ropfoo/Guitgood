import React, {useContext} from 'react';
import {useReducer} from 'react';
import {Scale, ScaleType} from '../components/Quiz/_data/notes';
import {
  QuestionSettingsAction,
  QuestionSettingsReducer,
  questionSettingsReducer,
  QuestionSettingsState,
} from './QuestionSettingsReducer';

interface QuestionSettingsContext {
  questionSettings: QuestionSettingsState;
  dispatch: undefined | React.Dispatch<QuestionSettingsReducer>;
}

const initalQuestionSettings: QuestionSettingsState = {
  scaleType: Scale.MAJOR,
  scaleTypeOptions: [],
};

const QuestionSettingsContext = React.createContext<QuestionSettingsContext>({
  questionSettings: initalQuestionSettings,
  dispatch: undefined,
});

export const useQuestionSettingsContext = () =>
  useContext(QuestionSettingsContext);

export const QuestionSettingsProvider: React.FC = ({children}) => {
  const [questionSettings, dispatch] = useReducer(questionSettingsReducer, {
    ...initalQuestionSettings,
    scaleTypeOptions: [
      {
        name: 'Major',
        isActive: true,
        id: Scale.MAJOR,
        update: () => updateScaleType(Scale.MAJOR),
      },
      {
        name: 'Minor',
        isActive: false,
        id: Scale.MINOR,
        update: () => updateScaleType(Scale.MINOR),
      },
    ],
  });

  function updateScaleType(type: Scale) {
    dispatch({
      type: QuestionSettingsAction.UPDATE_SCALE_TYPE,
      payload: {scaleType: type},
    });
  }
  return (
    <QuestionSettingsContext.Provider value={{questionSettings, dispatch}}>
      {children}
    </QuestionSettingsContext.Provider>
  );
};
