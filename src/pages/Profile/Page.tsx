import React, { useState } from 'react';
import Loader from '../../components/Loader/Component';
import { useStyles } from './styles';
import ApplicationMenu from '../../components/ApplicationMenu/Component';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Question from '../../components/Question/Component';
const Profile = ({ isLoading }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <ApplicationMenu title='Preferences' />
      <div className={classes.background}>
        {isLoading && <Loader />}
        <Question question='Do you like to give oral sex to your partner?' />
        <Question question='Do you like to receive oral sex to your partner? ' />
        <Question question='Do you want to upgrade your skill in oral sex? ' />
        <Question question='Do you want your partner to upgrade his/her skill in oral sex? ' />
        <Question question='Have you tried to diversify oral sex by additional sensations?' />
        <MobileStepper
          variant='dots'
          steps={2}
          position='bottom'
          activeStep={activeStep}
          classes={{
            root: classes.root,
            dotActive: classes.dotActive,
          }}
          nextButton={
            <Button
              size='small'
              onClick={handleNext}
              disabled={activeStep === 5}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size='small'
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    </>
  );
};

export default Profile;
