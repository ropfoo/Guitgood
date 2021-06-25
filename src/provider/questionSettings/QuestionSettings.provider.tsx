import React, {useContext} from 'react';
import {useReducer} from 'react';
import {Scale} from '../../components/Quiz/_data/notes';
import {
  QuestionSettingsAction,
  QuestionSettingsReducer,
  questionSettingsReducer,
  QuestionSettingsState,
} from './QuestionSettingsReducer';

interface QuestionSettingsContext {
  questionSettings: QuestionSettingsState;
  dispatchQuestionSettings: undefined | React.Dispatch<QuestionSettingsReducer>;
}

const initalQuestionSettings: QuestionSettingsState = {
  scaleType: Scale.MAJOR,
  scaleTypeOptions: [],
  randomScale: false,
};

const QuestionSettingsContext = React.createContext<QuestionSettingsContext>({
  questionSettings: initalQuestionSettings,
  dispatchQuestionSettings: undefined,
});

export const useQuestionSettingsContext = () =>
  useContext(QuestionSettingsContext);

export const QuestionSettingsProvider: React.FC = ({children}) => {
  const [questionSettings, dispatchQuestionSettings] = useReducer(
    questionSettingsReducer,
    {
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
    },
  );

  function updateScaleType(type: Scale) {
    dispatchQuestionSettings({
      type: QuestionSettingsAction.UPDATE_SCALE_TYPE,
      payload: {scaleType: type},
    });
  }
  return (
    <QuestionSettingsContext.Provider
      value={{questionSettings, dispatchQuestionSettings}}>
      {children}
    </QuestionSettingsContext.Provider>
  );
};
