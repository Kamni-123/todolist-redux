import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuList';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';

import { EDIT_ITEM, DELETE_ITEM, TOGGLE_COMPLETE } from '../actions/actions';
import { SimpleDialog } from './ItemDialog';
import { ListItemText } from '@mui/material';

export default function ToDoItem(props) {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleItemClick = () => {
        dispatch({type: TOGGLE_COMPLETE, payload: { index: props.i }});
    }

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    };  

    const handleEditClick = () => {
        handleMenuClose();
        setOpenDialog(true);
    };

    const handleDeleteClick = () => {
        handleMenuClose();
        dispatch({ type: DELETE_ITEM, payload: props.i }); 
    }

    const handleEditClose = (value) => {
        setOpenDialog(false);
        if (!!value){
            editItem(value);
        }
    };

    const editItem = (value) => {
        dispatch({ type: EDIT_ITEM, payload: { index: props.i, value: value }})
    }

    return (
        <ListItem sx={{ color: 'white' }} secondaryAction={ 
            <Box sx={{ color: 'white' }}>
                <IconButton edge="end" aria-label="menu" sx={{ color: 'white' }} onClick={handleMenuClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu id="basic-menu" sx={{ color: 'white' }} anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose} PaperProps={{ style: { width: '10ch' } }}>
                    <MenuItem style={{ display: 'flex', justifyContent: 'center' }} onClick={handleEditClick}>Edit</MenuItem>
                    <MenuItem style={{ display: 'flex', justifyContent: 'center' }} onClick={handleDeleteClick}>Delete</MenuItem>
                </Menu>
            </Box>
        }>
            <ListItemButton  sx={{ color: 'white' }} onClick={handleItemClick}>
                <ListItemText sx={{ color: 'white' }} primary={props.value} style={{ textDecoration: props.is_complete ? 'line-through' : 'none', width: '50%' }} />
            </ListItemButton>
            <SimpleDialog sx={{ color: 'white' }} open={openDialog} onClose={handleEditClose} value={props.value} />
        </ListItem>
    );
}
