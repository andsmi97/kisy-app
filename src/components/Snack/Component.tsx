import React, { FC } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { useStyles } from './styles';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';

export interface VariantIcon {
  success: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  warning: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  error: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  info: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}
const variantIcon: VariantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

interface SnackProps {
  message: string;
  variant: keyof VariantIcon;
  open: boolean;
  onClose: any;
}

const Snack: FC<SnackProps> = ({
  message,
  onClose,
  variant,
  open,
  ...other
}) => {
  const classes = useStyles();
  let Icon;
  //Workaround type warrning
  if (variant) {
    Icon = variantIcon[variant];
  } else {
    Icon = variantIcon['success'];
  }
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        ContentProps={{ 'aria-describedby': 'message-id' }}
      >
        <SnackbarContent
          className={classes[variant]}
          aria-describedby='client-snackbar'
          message={
            <span id='client-snackbar' className={classes.message}>
              <Icon className={classes.leftIcon} />
              {message}
            </span>
          }
          action={[
            <IconButton
              key='close'
              aria-label='Close'
              color='inherit'
              className={classes.close}
              onClick={onClose}
            >
              <CloseIcon className={classes.rightIcon} />
            </IconButton>,
          ]}
          {...other}
        />
      </Snackbar>
    </div>
  );
};

export default Snack;
