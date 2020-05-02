import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import ContactIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import ExitIcon from '@material-ui/icons/ExitToApp';

const icon = {
  MainPage: <HomeIcon />,
  Settings: <ContactIcon />,
  SignOut: <ExitIcon />,
};

const NavItem = ({ route, title, logout, onClickLogout, iconImage }) => {
  return logout ? (
    <ListItem button onClick={onClickLogout}>
      <ListItemIcon>{icon[iconImage]}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  ) : (
    <ListItem button component={Link} to={route}>
      <ListItemIcon>{icon[iconImage]}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default NavItem;
