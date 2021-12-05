
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import './Login.css'
import Image from '../images/blue.jpg';
import { Button } from 'react-bootstrap';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open,
  setOpen, }) {

  const [account, setAccount] = useState(false);
  const [login, setLogin] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setAccount(true)
    setLogin(false)
  }
  const handleLoginClick = () => {
    setAccount(false)
    setLogin(true)
  }
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} className="appbar-content">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">Login
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <div className="row">
            <div className="col-md-6">
              {login ?
                <LoginForm
                  handleSubmit={handleSubmit}
                  account={account}
                  setAccount={setAccount}
                />
                :
                ""}
              {account ? <SignUpForm
                login={login}
                setLogin={setLogin}
                handleLoginClick={handleLoginClick}
              />
                : ""
              }
            </div>
            <div className="col-md-6">
              <div className="sign-up">
                <img
                  className="d-block w-100"
                  src={Image}
                  alt="pp"
                />
              </div>

            </div>
          </div>
        </List>
      </Dialog>
    </div>
  );
}
