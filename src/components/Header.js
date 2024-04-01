import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SimpleDialog } from "./ItemDialog";
import { ADD_ITEM } from "../actions/actions";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

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
          is_complete: false,
        },
      });
    }
  };

  return (
    <Box className=" mt-24 ml-8 mr-3  flex items-center justify-end ">
      <AppBar position="static" className="bg-black shadow-md">
        <Toolbar className="bg-purple-300 justify-between rounded-lg">
          <Typography
            variant="h6"
            component="div"
            className="font-bold tracking-wider mr-auto"
            color="#35374B"
          >
            To Do List
          </Typography>
          <div className=" grid grid-cols-2">
            <IconButton
              size="medium"
              edge="end"
              aria-label="add"
              onClick={handleClickOpen}
            >
              <AddIcon />
            </IconButton>
            <Link
              to={"/login"}
              className="flex  items-center px-3 py-3  gap-2 "
            >
              <div className=" text-white ">
                <CgProfile size={23} />
              </div>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <SimpleDialog open={open} onClose={handleClose} value="" />
    </Box>
  );
}

