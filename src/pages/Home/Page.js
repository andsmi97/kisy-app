import React, { useEffect } from 'react';
import BottomMenu from '../../components/BottomMenu/Component';
import Loader from '../../components/Loader/Component';
import { useStyles } from './styles';

const Home = ({ analyzes, getAnalyzes, isLoading }) => {
  const classes = useStyles();

  useEffect(() => {
    getAnalyzes();
  }, [getAnalyzes]);

  return (
    <>
      <div className={classes.background}>
        <h3 className={classes.title}>Последние анализы</h3>
        {isLoading && <Loader />}

        {/* Content goes here */}
      </div>
      <BottomMenu />
    </>
  );
};

export default Home;
