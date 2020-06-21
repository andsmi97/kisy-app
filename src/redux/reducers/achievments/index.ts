import {
  CREATE_ACHIEVMENT,
  GET_ACHIEVMENTS,
  UPDATE_ACHIEVMENT,
  DELETE_ACHIEVMENT,
  OPEN_ACHIEVMENT_DIALOG,
  CLOSE_ACHIEVMENT_DIALOG,
  ON_CHANGE_ACHIEVMENT_FIELD,
} from './contstnats';
import { AchievmentCardProps } from '../../../components/Admin/Achievments/AchievmentCard/Component';

const defaultState = {
  achievments: [] as AchievmentCardProps[],
  achievmentId: '0',
  achievmentTitle: '',
  achievmentDescription: '',
  achievmentPhoto: '',
  achievmentPoints: 0,
  achievmentDialogStatus: false,
  achievmentDialogType: 'Add',
};

const filterAchievments = (state: any, achievmentId: string) => {
  return state.achievments.filter((achievment: AchievmentCardProps) => {
    return achievment.id !== achievmentId;
  });
};
export default (state = defaultState, action: any) => {
  switch (action.type) {
    case ON_CHANGE_ACHIEVMENT_FIELD:
      return { ...state, [action.field]: action.payload };
    case CREATE_ACHIEVMENT:
      return { ...state, achievments: [action.payload, ...state.achievments] };
    case GET_ACHIEVMENTS:
      return { ...state, achievments: action.payload };
    case UPDATE_ACHIEVMENT:
      return {
        ...state,
        achievments: state.achievments.map((achievment) => {
          if (achievment.id === action.payload.id) {
            return action.payload;
          }
          return achievment;
        }),
      };
    case DELETE_ACHIEVMENT:
      return {
        ...state,
        achievments: filterAchievments(state, action.payload.id),
      };
    case OPEN_ACHIEVMENT_DIALOG:
      if (action.payload.dialogType === 'Edit') {
        return {
          ...state,
          achievmentDialogStatus: true,
          achievmentDialogType: action.payload.dialogType,
          achievmentId: action.achievment.id,
          achievmentTitle: action.achievment.title,
          achievmentDescription: action.achievment.description,
          achievmentPhoto: action.achievment.image,
          achievmentPoints: action.achievment.points,
        };
      } else {
        // Add
        return {
          ...state,
          achievmentDialogStatus: true,
          achievmentDialogType: action.payload.dialogType,
          achievmentId: '0',
          achievmentTitle: '',
          achievmentDescription: '',
          achievmentPhoto: '',
          achievmentPoints: '',
        };
      }
    case CLOSE_ACHIEVMENT_DIALOG:
      return { ...state, achievmentDialogStatus: false };

    default:
      return state;
  }
};
