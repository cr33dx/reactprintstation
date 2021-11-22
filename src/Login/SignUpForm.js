import { Divider, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import './Login.css';

function SignUpForm({
  handleLoginClick }) {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pincode, setPincode] = useState();
  const [formError, setFormError] = useState([]);

  const handleSignUpClick = (e) => {
    const errors = [];
    if (name === "") {
      errors.push("name");
    }
    if (email === "") {
      errors.push("email")
    }
    if (password === "") {
      errors.push("password");
    }
    if (confirmPassword === "") {
      errors.push("confirmPassword");
    } else if (confirmPassword !== password) {
      errors.push("passwordUnmatch");
    }
    if (address === "") {
      errors.push("address");
    }
    if (state === "") {
      errors.push("state");
    }
    if (city === "") {
      errors.push("city");
    }
    if (pincode === "") {
      errors.push("pincode");
    }
    setFormError(errors);

  }
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
                <TextField placeholder="Enter the First Name"
                  fullWidth
                  size="small"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={formError.includes("name")}
                  helperText={
                    formError.includes("name") ? "First Name is Required" : ""
                  }
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <TextField placeholder="Enter the Last Name"
                  fullWidth
                  size="small"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Email Address</Form.Label>
              <TextField type="email" placeholder="Enter Email Address"
                fullWidth
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={formError.includes("email")}
                helperText={
                  formError.includes("email") ? "Email is Required" : ""
                }
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <TextField placeholder="Enter Password "
                  fullWidth
                  size="small"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  error={formError.includes("password")}
                  helperText={
                    formError.includes("password")
                      ? "Fill the required field"
                      : ""
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label> Confirm Password</Form.Label>
                <TextField placeholder="Enter Confirm Password"
                  fullWidth
                  size="small"
                  value={confirmPassword}
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={
                    formError.includes("confirmPassword") ||
                    formError.includes("passwordUnmatch")
                  }
                  helperText={
                    formError.includes("confirmPassword")
                      ? "Fill the required field"
                      : formError.includes("passwordUnmatch")
                        ? " Passwords do not Match "
                        : ""
                  }
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address </Form.Label>
              <TextField placeholder="Apartment, studio, or floor"
                fullWidth
                size="small"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                error={formError.includes("address")}
                helperText={
                  formError.includes("address") ? "Field is Required" : ""
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Alternative Address </Form.Label>
              <TextField placeholder="Apartment, studio, or floor"
                fullWidth
                size="small"
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <TextField placeholder="Enter your City"
                  fullWidth
                  size="small"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  error={formError.includes("city")}
                  helperText={
                    formError.includes("city") ? "Field is Required" : ""
                  }
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <TextField placeholder="Enter state"
                  fullWidth
                  size="small"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  error={formError.includes("state")}
                  helperText={
                    formError.includes("state") ? "Field is Required" : ""
                  }
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Pin code</Form.Label>
                <TextField placeholder="Enter your Area Pincode"
                  fullWidth
                  size="small"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  error={formError.includes("pincode")}
                  helperText={
                    formError.includes("pincode") ? "Field is Required" : ""
                  }
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Confirm you accept our Terms & Conditions, and Privacy Policy" />
            </Form.Group>

            <Button variant="primary" onClick={handleSignUpClick}>
              <a href="/track" className="button-link">Sign Up</a>
            </Button>
            <h5 className="sign" onClick={handleLoginClick}>Login </h5>
          </div>
        </Form>

      </Card>
    </div>
  )
}

export default SignUpForm
