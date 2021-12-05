import { Divider } from '@mui/material';
import React from 'react'
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import './Login.css';

function SignUpForm({ login,
  setLogin,
  handleLoginClick }) {

  return (
    <div>
      <Card className="login-card">
        <Form>
          <h3><b>SIGN UP</b></h3>
          <Divider />
          <div className="form-content">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="Enter First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Last Name" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label> Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address </Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Confirm you accept our Terms & Conditions, and Privacy Policy" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
           </Button>
            <h5 className="sign" onClick={handleLoginClick}>Login </h5>
          </div>
        </Form>

      </Card>
    </div>
  )
}

export default SignUpForm
