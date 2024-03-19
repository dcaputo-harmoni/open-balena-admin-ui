import React from 'react';
import { useNotify, useRedirect } from 'react-admin';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Form } from 'react-final-form';
import { useDeleteFleet, useDeleteFleetBulk } from '../lib/fleet';

export const DeleteFleetButton = ({ basepath, ...props }) => {
  const [open, setOpen] = React.useState(false);
  const notify = useNotify();
  const redirect = useRedirect();
  const deleteFleet = useDeleteFleet();
  const deleteFleetBulk = useDeleteFleetBulk();

  const handleSubmit = async (values) => {
    if (props.selectedIds) {
      await deleteFleetBulk(props.selectedIds);
    } else {
      await deleteFleet(props.record);
    }
    setOpen(false);
    notify('Fleet(s) successfully deleted');
    redirect(props.redirect, basepath);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant={props.variant || 'contained'}
        color='inherit'
        size={props.size}
        sx={props.sx}
      >
        <DeleteIcon sx={{ mr: '4px' }} size={props.size} /> {props.children}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'> Delete Fleet(s) </DialogTitle>
        <DialogContent>
          Note: this action will be irreversible
          <br />
          <br />
          <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <Button variant='contained' color='primary' type='submit' disabled={submitting}>
                  Confirm Delete
                </Button>
              </form>
            )}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteFleetButton;
