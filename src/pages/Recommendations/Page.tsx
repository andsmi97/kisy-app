import React from 'react';
import Loader from '../../components/Loader/Component';
import { useStyles } from './styles';
import MenuItemCard from '../../components/MenuItemCard/Component';
import ApplicationMenu from '../../components/ApplicationMenu/Component';
import { ReactComponent as ConnectPartner } from '../../assets/images/ConnectPartner.svg';
import { ReactComponent as Recommendations } from '../../assets/images/Recommendations.svg';
import { ReactComponent as Profile } from '../../assets/images/Profile.svg';

const Home = ({ isLoading }) => {
  const classes = useStyles();

  return (
    <>
      <ApplicationMenu title='Recommendations' />
      <div className={classes.background}>
        {isLoading && <Loader />}
        <MenuItemCard
          SVGImageComponent={Profile}
          title={'Add your personal preferences'}
          linkTo={'/profile'}
        />
        <MenuItemCard
          SVGImageComponent={ConnectPartner}
          title={'Connect with your partner'}
          linkTo={'/connect'}
        />
        <MenuItemCard
          SVGImageComponent={Recommendations}
          title={'Get personal Recommendations'}
          linkTo={'/recommendations'}
        />
      </div>
    </>
  );
};

export default Home;
