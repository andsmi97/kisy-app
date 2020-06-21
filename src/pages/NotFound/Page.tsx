import React from 'react';
import { ReactComponent as Image } from '../../assets/images/NotFound.svg';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';

const NotFound = ({ onRedirect }: any): any => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <div className={classes.background}>
        <h3 className={classes.title}>{t('pageNotFound.title')}</h3>
        <Image className={classes.image} />
        <Button variant='contained' color='secondary' onClick={onRedirect}>
          {t('pageNotFound.return')}
        </Button>
      </div>
    </>
  );
};

export default NotFound;
