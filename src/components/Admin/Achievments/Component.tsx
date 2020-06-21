import React, { FC, useEffect } from 'react';
import { useComponentStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import Add from '@material-ui/icons/Add';
import AchievmentCard from './AchievmentCard/Container';
import { AchievmentCardProps } from './AchievmentCard/Component';
import Fab from '@material-ui/core/Fab';
import AchievmentDialog from './AchievmentDialog/Container';
import firestore from '../../../firebase/firestoreQueries';
export interface AchievmentsProps {
  achievments: AchievmentCardProps[];
  openAchievmentDialog(dialogType: string): void;
  getAchievments(achievments: AchievmentCardProps[]): void;
}

const Achievments: FC<AchievmentsProps> = ({
  achievments,
  openAchievmentDialog,
  getAchievments,
}) => {
  const classes = useComponentStyles();

  useEffect(() => {
    (async () => {
      console.log('get achievments')
      getAchievments(await firestore.Achievments.getAll());
    })();
  }, [getAchievments]);

  return (
    <div className={classes.wrapper} id='Achievments'>
      <Grid container spacing={2} justify='center' alignItems='center'>
        {achievments.map((achievment) => (
          <Grid item xs={12} sm={12} md={12} key={achievment.id}>
            <Fade collapse bottom>
              <AchievmentCard {...achievment} />
            </Fade>
          </Grid>
        ))}
      </Grid>
      <AchievmentDialog />
      <Fab
        className={classes.fab}
        color='secondary'
        onClick={() => openAchievmentDialog('Add')}
      >
        <Add />
      </Fab>
    </div>
  );
};

export default Achievments;
