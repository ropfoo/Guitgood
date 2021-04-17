export interface ScaleInputState {
  active: boolean;
  inputValue: string;
  target: number;
  values: string[];
}

export interface ScaleInputPayload {
  active: boolean;
  inputValue: string;
  target: number;
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
  SHOW_INPUT,
  HIDE_INPUT,
}

export function scaleInputReducer(
  state: ScaleInputState,
  action: ScaleInputReducer,
): ScaleInputState {
  switch (action.type) {
    case ScaleInputAction.UPDATE_VALUE:
      if (action.payload) {
        state.values[action.payload.target] = action.payload.inputValue;
        return {...state, inputValue: action.payload.inputValue};
      } else {
        return state;
      }
    case ScaleInputAction.SHOW_INPUT:
    if (action.payload)
        return {...state, active: true, target: action.payload?.target};
    case ScaleInputAction.HIDE_INPUT:
      return {...state, active: false};
    default:
      return state;
  }
}
