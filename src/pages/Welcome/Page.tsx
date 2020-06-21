import React, { useState, ChangeEvent } from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { ReactComponent as WelcomeImage } from '../../assets/images/Welcome.svg';
import { ReactComponent as LogoImage } from '../../assets/images/Logo.svg';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import i18next from 'i18next';

// function createEnum<T extends { [P in keyof T]: P }>(o: T) {
//   return o;
// }

const Welcome = (): any => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [level, setLevel] = useState<any>(i18next.t('suggestor.levels.Soft'));
  const [isLevelPicked, setIsLevelPicked] = useState<boolean>(false);
  const [suggestedTopic, setSuggestedTopic] = useState<string | null>(null);
  const [language, setLanguage] = useState<any>('en');
  const changeLanguage = (e: ChangeEvent<HTMLInputElement>) => {
    const pickedLanguage = e.target.value;
    setLanguage(pickedLanguage as any);
    i18n.changeLanguage(pickedLanguage);
  };

  const changeLevel = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLevelPicked(true);
    setLevel(e.target.value as any);
  };
  const changeSuggestedTopic = () => {
    setSuggestedTopic(pickSuggestion());
  };
  const levels = {
    Soft: [
      'Slow sex with sensual ear breathing',
      'Full body massage with aroma oils',
      'Sex after romantic dinner',
      'Oral sex with anticipation',
      // 'Медленный секс с чувственным дыханием на ухо',
      // 'Массаж всего тела с ароматными маслами',
      // 'Секс после романтического ужина',
      // 'оральный секс с "предвкушением"',
    ],
    Medium: [
      'Sex in front of the mirror. Keep eye contact',
      'Perform unexpected sex',
      'Add some ice or an Ice cream play',
      'Dirty talk',
      'Put a mask on eyes',
      // 'Секс перед зеркалом смотря друг другу в глаза',
      // 'Устроить неожиданное начало секса',
      // 'Грязные разговоры',
      // 'Маска на глаза'
    ],
    Hard: [
      'Asphyxiation',
      'Flogging',
      'Whipping',
      'Rough Anal',
      'Deepthroat',
      'Face fuck',
      'Become a slave for your partner',
      'Immobilization/Shibari',
      'Use clothspins',

      // 'Удушение',
      // 'Cильные шлепки',
      // 'Грубый Анальный секс',
      // 'Глубокий минет',
      // 'Стать рабом/рабыней',
      // 'Связывание/обездвиживание',
      // 'Воспользуйтесь прищепками'
    ],
  };
  const Levels = {
    Soft: t('suggestor.levels.Soft'),
    Medium: t('suggestor.levels.Medium'),
    Hard: t('suggestor.levels.Hard'),
  };

  const Languages = {
    en: 'en',
    ru: 'ru',
  };
  const levelsPicker = Object.keys(Levels).map((level) => ({
    value: level,
    label: level,
  }));

  const languagePicker = Object.keys(Languages).map((level) => ({
    value: level,
    label: level,
  }));

  const pickSuggestion = (): string => {
    const currentLevel: keyof typeof Levels = level;
    const pickedSuggestions: any = levels[currentLevel];
    return pickedSuggestions[
      Math.floor(Math.random() * pickedSuggestions.length)
    ];
  };
  return (
    <div className={classes.background}>
      <div className={classes.buttonsWrapper}>
        <div>
          <WelcomeImage />
        </div>
        <div className={classes.logoWrapper}>
          <LogoImage />
        </div>
        <Typography variant='body1'>{t('suggestor.info')}</Typography>
        <TextField
          id='level-textfield'
          select
          className={classes.selectField}
          classes={{ root: classes.selectField }}
          color='secondary'
          label={t('suggestor.level')}
          value={level}
          onChange={changeLevel}
          variant='filled'
        >
          {levelsPicker.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <form className={classes.form}>
          {isLevelPicked && (
            <>
              <Button
                onClick={changeSuggestedTopic}
                variant='contained'
                color='secondary'
                className={classes.button}
              >
                {t('suggestor.suggest')}
              </Button>
              {!!suggestedTopic && (
                <Paper elevation={4} className={classes.paper}>
                  <Typography variant='body1'>{suggestedTopic}</Typography>
                </Paper>
              )}
            </>
          )}
        </form>
        <TextField
          id='language-textfield'
          select
          className={classes.selectField}
          classes={{ root: classes.selectField }}
          color='secondary'
          label={t('language')}
          value={language}
          onChange={changeLanguage}
          variant='filled'
        >
          {languagePicker.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Welcome;
