import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AchievmentCardProps } from '../AchievmentCard/Component';
// import firestore from '../../../../firebase/firestoreQueries';

export interface AchievmentDialogProps {
  achievmentId: string;
  achievmentTitle: string;
  achievmentDescription: string;
  achievmentPhoto: string;
  achievmentDialogStatus: boolean;
  achievmentDialogType: string;
  achievmentPoints: number;
  createAchievment(achievment: Partial<AchievmentCardProps>): void;
  updateAchievment(achievment: AchievmentCardProps): void;
  closeAchievmentDialog(): void;
  onChangeAchievmentField(field: string, value: string): void;
}

const AchievmentDialog: FC<AchievmentDialogProps> = ({
  achievmentId,
  achievmentTitle,
  achievmentDescription,
  achievmentPhoto,
  achievmentPoints,
  achievmentDialogStatus,
  achievmentDialogType,
  createAchievment,
  updateAchievment,
  closeAchievmentDialog,
  onChangeAchievmentField,
}) => {
  const onSubmit = async (e: any) => {
    const achievment = {
      title: achievmentTitle,
      description: achievmentDescription,
      image: achievmentPhoto,
      points: achievmentPoints,
    };
    e.preventDefault();
    if (achievmentDialogType === 'Add') {
      createAchievment(achievment);
    } else if (achievmentDialogType === 'Edit') {
      updateAchievment({ ...achievment, id: achievmentId });
    }
  };

  const onChangeField = (field: string) => (event: any) => {
    onChangeAchievmentField(field, event.target.value);
  };

  return (
    <div>
      <Dialog
        open={achievmentDialogStatus}
        onClose={closeAchievmentDialog}
        aria-labelledby='form-dialog-title'
      >
        {achievmentDialogType === 'Add' && (
          <DialogTitle id='form-dialog-title'> Новое достижение</DialogTitle>
        )}
        {achievmentDialogType === 'Edit' && (
          <DialogTitle id='form-dialog-title'>
            Редактирование достижения
          </DialogTitle>
        )}
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='achievmentTitle'
            label='Название'
            value={achievmentTitle}
            type='text'
            fullWidth
            onChange={onChangeField('achievmentTitle')}
            variant='filled'
          />
          <TextField
            margin='dense'
            id='achievmentDescription'
            label='Описание'
            type='text'
            value={achievmentDescription}
            fullWidth
            onChange={onChangeField('achievmentDescription')}
            variant='filled'
          />
          <TextField
            margin='dense'
            id='achievmentPhoto'
            value={achievmentPhoto}
            label='Фотография'
            type='text'
            fullWidth
            onChange={onChangeField('achievmentPhoto')}
            variant='filled'
          />
          <TextField
            margin='dense'
            id='achievmentPoints'
            value={achievmentPoints}
            label='Очки'
            type='number'
            fullWidth
            onChange={onChangeField('achievmentPoints')}
            variant='filled'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAchievmentDialog} color='primary'>
            Отмена
          </Button>
          <Button onClick={onSubmit} color='primary'>
            {achievmentDialogType === 'Add' && 'Создать'}
            {achievmentDialogType === 'Edit' && 'Обновить'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AchievmentDialog;
