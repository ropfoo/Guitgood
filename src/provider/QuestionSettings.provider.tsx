import React, {useContext} from 'react';
import {useReducer} from 'react';
import {Scale} from '../components/Quiz/_data/notes';
import {
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
};

const QuestionSettingsContext = React.createContext<QuestionSettingsContext>({
  questionSettings: initalQuestionSettings,
  dispatch: undefined,
});

export const useQuestionSettingsContext = () =>
  useContext(QuestionSettingsContext);

export const QuestionSettingsProvider: React.FC = ({children}) => {
  const [questionSettings, dispatch] = useReducer(
    questionSettingsReducer,
    initalQuestionSettings,
  );

  return (
    <QuestionSettingsContext.Provider value={{questionSettings, dispatch}}>
      {children}
    </QuestionSettingsContext.Provider>
  );
};
