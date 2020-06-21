import { connect } from 'react-redux';
import Achievments from './Component';
import {
  getAchievments,
  openAchievmentDialog,
} from '../../../redux/reducers/achievments/actions';
import { AchievmentCardProps } from './AchievmentCard/Component';
import { AppStateType } from '../../../redux/store';

const mapStateToProps = (state: AppStateType) => ({
  achievments: state.achievments.achievments,
});

const mapDispatchToProps = (dispatch: any) => ({
  getAchievments: (achievments: AchievmentCardProps[]) =>
    dispatch(getAchievments(achievments)),
  openAchievmentDialog: (dialogType: string) =>
    dispatch(openAchievmentDialog(dialogType)),
});

const AchievmentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Achievments);

export default AchievmentsContainer;
