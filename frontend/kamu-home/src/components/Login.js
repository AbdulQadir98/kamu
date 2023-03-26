import React , { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import AuthService from "../services/auth.service";

const Login = () => {

  const navigate = useNavigate();

  // toggle the login form modal 
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };
  
  // login form
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  // validation 
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
      e.preventDefault();
      
      await AuthService.login(username, password)
        .then(() => {
          navigate("/dashboard")
        })
        .catch(() => {
          setError(true)
        });

  };
  
  // const required = value => {
  //   if (!value) {
  //     return (
  //       <div className="bg-red-800">
  //         This field is required!
  //       </div>
  //     );
  //   }
  // };

  return ( 
    <>
      <Stack spacing={2} direction="row">
        <Link to={`/register`}><Button variant="outlined">SignUp</Button></Link>
        <Button onClick={handleClickOpen} variant="contained">Login</Button>
      </Stack>

      {/* login modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login Form</DialogTitle>
        <form id='login-form' onSubmit={handleLogin}>
          <DialogTitle sx={{ width: 450, marginBottom: -1 }}>
            {"Enter credentials"}
          </DialogTitle>
          <DialogContent>
            <TextField
              id='username'
              error={error}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
              margin="dense"
              name="username"
              label="username"
              type="text"
              fullWidth
              helperText={error ? "Invalid username" : null}
            />
            <TextField
              id='password'
              error={error}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              margin="dense"
              name="password"
              label="password"
              type="password"
              fullWidth
              helperText={error ? "Invalid password" : null}
            />             
          </DialogContent>
          <DialogActions>
            <Button id='reset' type="reset">Cancel</Button>
            <Button id='submit' type="submit" autoFocus>
              Login
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
 
export default Login;