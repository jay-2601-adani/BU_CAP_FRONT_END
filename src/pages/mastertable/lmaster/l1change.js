import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function L1change(props) {
  const [open, setOpen] = React.useState(false);
  const [type,settype]=React.useState(props.type)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange=(event)=>{
    settype(event.target.value)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <EditIcon></EditIcon>Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit L1 Value"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ marginTop: "5%" }}
          >
            {/* name */}
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              defaultValue={props.name}
            />
            {/* type */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="type"
              defaultValue={props.type}
              onChange={handleChange}
            >
              <MenuItem value="Core">Core</MenuItem>
              <MenuItem value="Support">Support</MenuItem>
             
            </Select>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">
            Cancle
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            color="success"
            autoFocus
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}