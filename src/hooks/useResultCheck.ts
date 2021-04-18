import {ScaleInputValue} from '../components/Inputs/ScaleInput/ScaleInputReducer';
import {note} from '../components/Quiz/_data/notes';

export interface AnswerType {
  answerIndex: number;
  result: boolean;
}

export interface CheckTriadResult {
  result: boolean;
  answerTypes: AnswerType[];
}

export function useResultCheck(
  selectedNotes: ScaleInputValue[],
  rootNote: note,
) {
  const checkTriad = (): CheckTriadResult => {
    const resulsts = selectedNotes.map(selectedNote =>
      rootNote.triads.includes(selectedNote.name),
    );
    const answerTypes = resulsts.map(
      (result, index): AnswerType => ({
        answerIndex: index,
        result,
      }),
    );
    return {
      result: !resulsts.includes(false),
      answerTypes,
    };
  };

  return {
    checkTriad,
  };
}
