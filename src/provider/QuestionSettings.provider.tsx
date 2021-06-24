import React, {useState, useContext} from 'react';
import {Scale, ScaleType} from '../components/Quiz/_data/notes';

interface QuestionSettingsContext {
  scaleType: ScaleType;
  setScaleType: undefined | React.Dispatch<React.SetStateAction<ScaleType>>;
}

const QuestionSettingsContext = React.createContext<QuestionSettingsContext>({
  scaleType: Scale.MAJOR,
  setScaleType: undefined,
});

export const useQuestionSettingsContext = () =>
  useContext(QuestionSettingsContext);

export const QuestionSettingsProvider: React.FC = ({children}) => {
  const [scaleType, setScaleType] = useState<ScaleType>(Scale.MAJOR);

  return (
    <QuestionSettingsContext.Provider value={{scaleType, setScaleType}}>
      {children}
    </QuestionSettingsContext.Provider>
  );
};
