import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
const sexes = [
  {
    value: 'Yes',
    label: 'Yes',
  },
  {
    value: 'No',
    label: 'No',
  },
  {
    value: 'idontknow',
    label: "I don't know",
  },
];

const Question = ({ question }) => {
  const classes = useStyles();
  const [answer, setAnswer] = useState();
  const changeAnswer = (e) => setAnswer(e.target.value);
  return (
    <div className={classes.root} elevation={2}>
      <Typography variant='body2' className={classes.question}>
        {question}
      </Typography>
      <TextField
        id='sex-textfield'
        select
        classes={{ root: classes.selectField }}
        color='secondary'
        label='Choice'
        value={answer}
        onChange={changeAnswer}
        variant='filled'
      >
        {sexes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default Question;
