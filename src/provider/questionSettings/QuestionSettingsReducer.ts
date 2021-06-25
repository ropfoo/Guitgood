import {ToggleOption} from '../../components/Inputs/CapToggleGroup/CapToggleGroup';
import {Scale, ScaleType} from '../../components/Quiz/_data/notes';

export interface QuestionSettingsState {
  scaleType: ScaleType;
  scaleTypeOptions: ToggleOption[];
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
      if (action.payload) {
        updateScaleToggleGroup(state, action.payload.scaleType);
        return {...state, scaleType: action.payload.scaleType};
      }
    case QuestionSettingsAction.TOGGLE_SCALE_TYPE:
      const newScaleType = !!state.scaleType ? Scale.MAJOR : Scale.MINOR;
      return {...state, scaleType: newScaleType};

    default:
      return state;
  }
}

// Helper Functions

function updateScaleToggleGroup(
  state: QuestionSettingsState,
  currentScaleType: ScaleType,
) {
  state.scaleTypeOptions = state.scaleTypeOptions.map(
    (option: ToggleOption) => {
      if (option.id === currentScaleType) {
        option.isActive = true;
      } else {
        option.isActive = false;
      }
      return option;
    },
  );
}
