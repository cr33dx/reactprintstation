
import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import './Login.css'
import { Form, Card, Button } from 'react-bootstrap';

export default function LoginForm({
  handleSubmit,
}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onChangeHandler = (fieldName, value) => {
    if (fieldName === "email") {
      setEmail(value);
    }
    else if (fieldName === "password") {
      setPassword(value);
    }
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password.trim() === "" || email.trim() == "") {
      return ("required both field");
    }
    else {
      return (password + " " + email);
      setPassword("");
      setEmail("");
    }
  }
  return (
    <div>
      <div className="login">
        <Form>
          <Card className="login-card">
            <h3><b>LOGIN FORM</b></h3>
            <Divider />
            <div className="form-content">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                  value={email}
                  onChange={(e) => { onChangeHandler("email", e.target.value) }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                  value={password}
                  onChange={(e) => { onChangeHandler("password", e.target.value) }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <div className="submit">
                <Button variant="primary" type="submit" onClick={onSubmitHandler}>
                  Submit
                </Button>
              </div>
              <Form.Label className="forget-content">Forget your Password?</Form.Label>
              <h5 className="sign" onClick={handleSubmit}>Sign Up</h5>
            </div>
          </Card>
        </Form>
      </div>
    </div>
  )
}
