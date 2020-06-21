import React from 'react';
import Cards from '../../../components/Admin/Cards/Component';
import Drawer from '../../../components/Admin/Drawer/Container';
const MainPage = () => {
  return (
    <Drawer page='Карточки'>
      <Cards />
    </Drawer>
  );
};

export default MainPage;
