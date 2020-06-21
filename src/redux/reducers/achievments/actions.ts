import {
  CREATE_ACHIEVMENT,
  GET_ACHIEVMENTS,
  UPDATE_ACHIEVMENT,
  DELETE_ACHIEVMENT,
  OPEN_ACHIEVMENT_DIALOG,
  CLOSE_ACHIEVMENT_DIALOG,
  ON_CHANGE_ACHIEVMENT_FIELD,
} from './contstnats';
import firestore from '../../../firebase/firestoreQueries';
import { AchievmentCardProps } from '../../../components/Admin/Achievments/AchievmentCard/Component';

export const createAchievment = (achievment: AchievmentCardProps) => async (
  dispatch: any,
) => {
  const createdAchievment = await firestore.Achievments.create(achievment);
  dispatch({
    type: CREATE_ACHIEVMENT,
    payload: createdAchievment,
  });
  dispatch(closeAchievmentDialog());
};

export const getAchievments = (achievments: AchievmentCardProps[]) => ({
  type: GET_ACHIEVMENTS,
  payload: achievments,
});

export const updateAchievment = (achievment: AchievmentCardProps) => async (
  dispatch: any,
) => {
  await firestore.Achievments.update(achievment);
  dispatch({
    type: UPDATE_ACHIEVMENT,
    payload: achievment,
  });
  dispatch(closeAchievmentDialog());
};

export const deleteAchievment = (id: string) => ({
  type: DELETE_ACHIEVMENT,
  payload: { id },
});

export const openAchievmentDialog = (
  dialogType: string,
  achievment?: AchievmentCardProps,
) => ({
  type: OPEN_ACHIEVMENT_DIALOG,
  payload: { dialogType },
  achievment,
});

export const closeAchievmentDialog = () => ({
  type: CLOSE_ACHIEVMENT_DIALOG,
});

export const onChangeAchievmentField = (field: string, payload: string) => ({
  type: ON_CHANGE_ACHIEVMENT_FIELD,
  field,
  payload,
});
