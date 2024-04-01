import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { SimpleDialog } from './ItemDialog';
import { ADD_ITEM } from '../actions/actions';

export default function Header() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    addItem(value);
  };

  const addItem = (value) => {
    if (!!value) {
      dispatch({
        type: ADD_ITEM,
        payload: {
          value: value,
          is_complete: false
        }
      });
    }
  }

  return (
    <Box className="bg-gray-200 p-4">
      <AppBar position="static" className="bg-white shadow-md">
        <Toolbar className="justify-between">
          <Typography variant="h6" component="div" className="font-bold tracking-wider">
            To Do List
          </Typography>
          <IconButton
            size="medium"
            edge="end"
            color="inherit"
            aria-label="add"
            onClick={handleClickOpen}
          >
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SimpleDialog open={open} onClose={handleClose} value="" />
    </Box>
  );
}

