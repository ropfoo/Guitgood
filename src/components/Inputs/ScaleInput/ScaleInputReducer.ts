import {AnswerType} from '../../../hooks/useResultCheck';

export enum AnswerState {
  DEFAULT,
  ACTIVE,
  WRONG,
}

export interface ScaleInputValue {
  name: string;
  answerState: AnswerState;
}

export interface ScaleInputState {
  active: boolean;
  inputValue: string;
  target: number;
  values: ScaleInputValue[];
}

export interface ScaleInputPayload {
  active: boolean;
  inputValue: string;
  target: number;
  answerTypes?: AnswerType[];
  values?: ScaleInputValue[];
}

export interface ScaleInputReducer {
  type: ScaleInputAction;
  payload?: ScaleInputPayload;
}

export const initialScaleInputState: ScaleInputState = {
  active: false,
  inputValue: '',
  target: 0,
  values: [],
};

export enum ScaleInputAction {
  UPDATE_VALUE,
  UPDATE_ROOT_VALUE,
  SHOW_INPUT,
  HIDE_INPUT,
  SHOW_WRONG_ANSWERS,
  RESET_ANSWERS,
}

export function scaleInputReducer(
  state: ScaleInputState,
  action: ScaleInputReducer,
): ScaleInputState {
  switch (action.type) {
    case ScaleInputAction.UPDATE_VALUE:
      if (action.payload) {
        state.values[action.payload.target] = {
          name: action.payload.inputValue,
          answerState: AnswerState.DEFAULT,
        };
        return {...state, inputValue: action.payload.inputValue};
      } else {
        return state;
      }
    case ScaleInputAction.UPDATE_ROOT_VALUE:
      if (action.payload && action.payload.values)
        return {...state, values: [...action.payload.values]};
    case ScaleInputAction.SHOW_INPUT:
      if (action.payload)
        return {...state, active: true, target: action.payload?.target};
    case ScaleInputAction.HIDE_INPUT:
      return {...state, active: false};
    case ScaleInputAction.RESET_ANSWERS:
      state.values.map((value, index) => {
        if (index > 0) {
          value.answerState = AnswerState.DEFAULT;
          value.name = '';
        }
      });
      return {...state};
    case ScaleInputAction.SHOW_WRONG_ANSWERS:
      state.values.forEach((value, index) => {
        // Check if note in answer type is correct
        const isCorrect = action.payload?.answerTypes?.some(
          answerType => answerType.answerIndex === index && answerType.result,
        );
        // Change state depending on answer type
        if (!isCorrect) {
          value.answerState = AnswerState.WRONG;
        } else {
          value.answerState = AnswerState.ACTIVE;
        }
      });
      return {...state, active: false};
    default:
      return state;
  }
}
