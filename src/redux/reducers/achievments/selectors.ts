import { createSelector } from 'reselect';
import { AppStateType } from '../../store';

const selectAchievmentState = (state: AppStateType) => state.achievments;

export const selectAchievments = createSelector(
  [selectAchievmentState],
  (achievments) => achievments.achievments,
);
