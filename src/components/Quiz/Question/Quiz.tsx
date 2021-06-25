import React from 'react';
import {QuestionSettingsProvider} from '../../../provider/questionSettings/QuestionSettings.provider';
import Question from './Question';

const Quiz: React.FC = () => {
  return (
    <QuestionSettingsProvider>
      <Question />
    </QuestionSettingsProvider>
  );
};

export default Quiz;
