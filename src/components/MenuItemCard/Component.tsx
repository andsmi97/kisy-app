import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const MenuItemCard = ({ linkTo, title, SVGImageComponent }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={1} to={linkTo} component={Link}>
      <Typography variant='h5' className={classes.title}>
        {title}
      </Typography>
      <div className={classes.imageWrapper}>
        <SVGImageComponent className={classes.image} />
      </div>
    </Paper>
  );
};

export default MenuItemCard;
