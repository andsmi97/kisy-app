import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { useComponentStyles } from './styles';
import firestore from '../../../../firebase/firestoreQueries';

export interface AchievmentCardProps {
  title: string;
  description?: string;
  image?: string;
  points?: number;
  id: string;
}

export interface AchievmentCardWithContainerProps extends AchievmentCardProps {
  deleteAchievment(id: string): void;
  openAchievmentDialog(type: string, achievment: AchievmentCardProps): void;
}

const AchievmentCard: FC<AchievmentCardWithContainerProps> = ({
  id,
  title,
  image,
  description,
  points,
  deleteAchievment,
  openAchievmentDialog,
}) => {
  const classes = useComponentStyles();
  const achievment = { id, title, image, description, points };
  console.log(achievment);
  const onDelete = (e: any) => {
    (async () => {
      if (window.confirm('Вы действительно хотите удалить достижение?')) {
        await firestore.Achievments.delete(id);
        deleteAchievment(id);
      }
    })();
  };
  return (
    <Paper className={classes.wrapper} elevation={3}>
      <div className={classes.imageWrapper}>
        <span className={classes.points}>{points}</span>
        <img src={image} alt={title} className={classes.image} />
      </div>
      <div className={classes.content}>
        <div className={classes.topPart}>
          <div className={classes.titleWrapper}>
            <Typography variant='body2' className={classes.title}>
              {title}
            </Typography>
          </div>
          <div className={classes.actionsWrapper}>
            <IconButton
              color='primary'
              component='span'
              onClick={() => openAchievmentDialog('Edit', achievment)}
            >
              <Edit />
            </IconButton>
            <IconButton color='primary' component='span' onClick={onDelete}>
              <Delete />
            </IconButton>
          </div>
        </div>
        <div className={classes.bottomPart}></div>
        <Typography variant='body2' className={classes.description}>
          {description}
        </Typography>
      </div>
    </Paper>
  );
};

export default AchievmentCard;
