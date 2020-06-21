import { connect } from 'react-redux';
import AchievmentDialog from './Component';
import {
  createAchievment,
  updateAchievment,
  closeAchievmentDialog,
  onChangeAchievmentField,
} from '../../../../redux/reducers/achievments/actions';
import { AchievmentCardProps } from '../AchievmentCard/Component';
import { AppStateType } from '../../../../redux/store';

const mapStateToProps = (state: AppStateType) => ({
  achievmentId: state.achievments.achievmentId,
  achievmentTitle: state.achievments.achievmentTitle,
  achievmentDescription: state.achievments.achievmentDescription,
  achievmentPhoto: state.achievments.achievmentPhoto,
  achievmentPoints: state.achievments.achievmentPoints,
  achievmentDialogStatus: state.achievments.achievmentDialogStatus,
  achievmentDialogType: state.achievments.achievmentDialogType,
});

const mapDispatchToProps = (dispatch: any) => ({
  createAchievment: (achievment: AchievmentCardProps) =>
    dispatch(createAchievment(achievment)),
  updateAchievment: (achievment: AchievmentCardProps) =>
    dispatch(updateAchievment(achievment)),
  closeAchievmentDialog: () => dispatch(closeAchievmentDialog()),
  onChangeAchievmentField: (field: string, value: string) =>
    dispatch(onChangeAchievmentField(field, value)),
});

const EditDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AchievmentDialog);

export default EditDialogContainer;
