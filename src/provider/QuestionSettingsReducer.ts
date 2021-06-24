import {Scale, ScaleType} from '../components/Quiz/_data/notes';

export interface QuestionSettingsState {
  scaleType: ScaleType;
}

export interface QuestionSettingsReducer {
  type: QuestionSettingsAction;
  payload?: QuestionSettingsPayload;
}

interface QuestionSettingsPayload {
  scaleType: ScaleType;
}

export enum QuestionSettingsAction {
  UPDATE_SCALE_TYPE,
  TOGGLE_SCALE_TYPE,
}

export function questionSettingsReducer(
  state: QuestionSettingsState,
  action: QuestionSettingsReducer,
): QuestionSettingsState {
  switch (action.type) {
    case QuestionSettingsAction.UPDATE_SCALE_TYPE:
      if (action.payload)
        return {...state, scaleType: action.payload.scaleType};
    case QuestionSettingsAction.TOGGLE_SCALE_TYPE:
      const newScaleType = !!state.scaleType ? Scale.MAJOR : Scale.MINOR;
      return {...state, scaleType: newScaleType};
    default:
      return state;
  }
}
