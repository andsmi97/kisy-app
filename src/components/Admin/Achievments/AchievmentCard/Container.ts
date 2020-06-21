import { connect } from 'react-redux';
import AchievmentCard from './Component';
import {
  deleteAchievment,
  openAchievmentDialog,
} from '../../../../redux/reducers/achievments/actions';
import { AchievmentCardProps } from './Component';
const mapDispatchToProps = (dispatch: any) => ({
  deleteAchievment: (id: string) => dispatch(deleteAchievment(id)),
  openAchievmentDialog: (
    dialogType: string,
    achievment?: AchievmentCardProps,
  ) => dispatch(openAchievmentDialog(dialogType, achievment)),
});

const AchievmentCardContainer = connect(
  null,
  mapDispatchToProps,
)(AchievmentCard);

export default AchievmentCardContainer;
