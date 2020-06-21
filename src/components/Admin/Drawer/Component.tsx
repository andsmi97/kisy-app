import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitIcon from '@material-ui/icons/ExitToApp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { menuItems } from './MenuItems';

export interface DrawerProps {
  page: string;
  signOut(): void;
  status: boolean;
  changeDrawerStatus(status: boolean): void;
  children: any;
}

const AdminDrawer: React.FC<DrawerProps> = ({
  page,
  signOut,
  status,
  changeDrawerStatus,
  children,
}) => {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    changeDrawerStatus(true);
  };

  const handleDrawerClose = () => {
    changeDrawerStatus(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: status,
        })}
      >
        <Toolbar>
          <IconButton
            // color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, status && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap className={classes.namePage}>
            {page}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={status}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map(({ Icon, to, name }, index) => (
            <ListItem button component={Link} to={to} key={index}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button key={'Выйти'} onClick={signOut}>
            <ListItemIcon>
              <ExitIcon />
            </ListItemIcon>
            <ListItemText primary={'Выйти'} />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: status,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

export default AdminDrawer;
