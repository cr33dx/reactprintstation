
import React, { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import './Login.css'
import { Form, Card, Button } from 'react-bootstrap';
import { TextField } from '@mui/material';

export default function LoginForm({
  handleSubmit,
}) {
  const [formError, setFormError] = useState([]);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmitForm = (e) => {
    const errors = [];
    if (email === "") {
      errors.push("email");
    }
    if (password === "") {
      errors.push("password");
    }
    setFormError(errors);
  };
  // const [enabled, setEnabled] = useState(false);
  // // const inform = { email, password };
  // useEffect(() => {
  //   if ( === "") {
  //     setEnabled(true);
  //   } else {
  //     setEnabled(false);
  //   }
  // }, []);
  return (

    <div className="login">
      <Form>
        <Card className="login-card">
          <h3><b>LOGIN FORM</b></h3>
          <Divider />
          <div className="form-content">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="field-content">
                <Form.Label>Email address</Form.Label>
                <TextField type="email" placeholder="Enter email"
                  fullWidth
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={formError.includes("email")}
                  helperText={
                    formError.includes("email") ? "Email is Required" : ""
                  }
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <TextField type="password" placeholder="Password"
                fullWidth
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={formError.includes("password")}
                helperText={
                  formError.includes("password") ? "Password is Required" : ""
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <div className="submit">
              <Button variant="primary" onClick={handleSubmitForm}>
                <a href="/track" className="button-link">Log In</a>
              </Button>
            </div>
            <Form.Label className="forget-content" >
              <a href="/forget" className="forget-link">Forget your Password?</a>
            </Form.Label>
            <h5 className="sign" onClick={handleSubmit}>Sign Up</h5>
          </div>
        </Card>
      </Form>
    </div>

  )
}

// {enabled ? (
//                   <Button disabled type="submit" variant="contained" size="large">
//                     Submit
//                   </Button>
//                 ) : ( 
// <Button variant="primary" onClick={handleSubmitForm}>
//   <a href="/track" className="button-link">Log In</a>
// </Button>
// )} 