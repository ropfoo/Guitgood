import {ScaleInputValue} from '../components/Inputs/ScaleInput/ScaleInputReducer';
import {note, Scale} from '../components/Quiz/_data/notes';

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
  /**
   * Check Triad
   * checks if user input matches triad notes and returns result + answer checks for each input
   * @param {Scale} scaleType
   * @returns {CheckTriadResult}
   */
  const checkTriad = (scaleType: Scale): CheckTriadResult => {
    // Checks user input for every selection and saves result in array
    const resulsts = selectedNotes.map(selectedNote =>
      scaleType === Scale.MAJOR
        ? rootNote.triadsMajor.includes(selectedNote.name)
        : rootNote.triadsMinor.includes(selectedNote.name),
    );
    // Creates new array storing answer index and corresponding result (boolean)
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
