import React, { FC } from 'react';

import Drawer from '../../../components/Admin/Drawer/Container';
import Achievments from '../../../components/Admin/Achievments/Container';

const MainPage: FC = () => {
  return (
    <Drawer page='Карточки'>
      <Achievments />
    </Drawer>
  );
};

export default MainPage;
