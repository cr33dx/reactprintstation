
import React from 'react';
import Divider from '@mui/material/Divider';
import './Login.css'
import { Form, Card, Button } from 'react-bootstrap';

export default function LoginForm({
  handleSubmit,
  account,
  setAccount
}) {
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
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <div className="submit">
                <Button variant="primary" type="submit" >
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
