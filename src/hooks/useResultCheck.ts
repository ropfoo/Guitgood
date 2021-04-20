import {ScaleInputValue} from '../components/Inputs/ScaleInput/ScaleInputReducer';
import {note, Scale, ScaleType} from '../components/Quiz/_data/notes';

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
  const checkTriad = (scaleType: Scale): CheckTriadResult => {
    const resulsts = selectedNotes.map(selectedNote =>
      scaleType === Scale.MAJOR
        ? rootNote.triadsMajor.includes(selectedNote.name)
        : rootNote.triadsMinor.includes(selectedNote.name),
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
