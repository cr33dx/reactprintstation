
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Printing.css';
import Login from '../Login/Login';

export default function MultipleFileInput(index,

) {
  const [files, setFiles] = useState([]);
  const [active, setActive] = useState();
  const [open, setOpen] = useState();

  const handleLoginClick = () => {
    setOpen(true)
  }
  function onFileUpload(event) {
    event.preventDefault();
    let id = event.target.id;
    let file_reader = new FileReader();
    let file = event.target.files[0];
    file_reader.onload = () => {
      setFiles([...files, { file_id: id, uploaded_file: file_reader.result }]);
      console.log([...files, { file_id: id, uploaded_file: file_reader.result }])
    };
    file_reader.readAsDataURL(file);
  }



  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (files.length === 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [files]);
  return (
    <div>
      <div className="customise-content">
        <div style={{ textAlign: 'left' }}>
          <h4>Choose the option given below:</h4>
        </div>
        <CardGroup>
          <Card className="customize-card"
          // style={active === index ? { border: '4px solid #95b0f5' } : {}}
          // onClick={() => setActive(index)}
          >
            <Card.Body>
              <Card.Title>Double Side Print</Card.Title>
              <Card.Text>1 Page : 0.75/Page</Card.Text>
              <input
                onChange={onFileUpload}
                id={1}
                accept=".jpeg, .pdf, .png, .jpg, .svg, .ppt, .word"
                type="file"
                multiple
              />
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Total Amount: 200</small>
            </Card.Footer>
          </Card>
          <Card className="customize-card">
            <Card.Body>
              <Card.Title>Single Side Print</Card.Title>
              <Card.Text>1 Page : 0.75/Page</Card.Text>
              <input
                onChange={onFileUpload}
                id={2}
                accept=".jpeg, .pdf, .png, .jpg, .svg, .ppt, .word"
                type="file"
                multiple
              />
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Total Amount: 200</small>
            </Card.Footer>
          </Card>
          <Card className="customize-card">
            <Card.Body>
              <Card.Title>Black and White Print</Card.Title>
              <Card.Text>1 Page : 0.75/Page</Card.Text>
              <input
                onChange={onFileUpload}
                id={3}
                accept=".jpeg, .pdf, .png, .jpg, .svg, .ppt, .word"
                type="file"
                multiple
              />
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Total Amount: 200</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <div className="customise-content">
        <CardGroup>
          <Card className="customize-card">
            <Card.Body>
              <Card.Title>Color Print</Card.Title>
              <Card.Text>1 Page : 0.75/Page</Card.Text>
              <input
                onChange={onFileUpload}
                id={4}
                accept=".jpeg, .pdf, .png, .jpg, .svg, .ppt, .word"
                type="file"
                multiple
              />
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Total Amount: 200</small>
            </Card.Footer>
          </Card>
          <Card className="customize-card">
            <Card.Body>
              <Card.Title>Spiral Bind or Not</Card.Title>
              <Card.Text>1 Page : 0.75/Page</Card.Text>
              <input
                onChange={onFileUpload}
                id={5}
                accept=".jpeg, .pdf, .png, .jpg, .svg, .ppt, .word"
                type="file"
                multiple
              />
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Total Amount: 200</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <div className="button-card">
          {enabled ? (
            <Button color="primary" variant="contained" size="large" onClick={handleLoginClick}>
              Next</Button>
          ) : (
              <Button disabled type="submit" variant="contained" size="large">
                Next
              </Button>
            )}
          {open ?
            <Login
              setOpen={setOpen}
              open={open}
            />
            : " "}
        </div>
      </div>
    </div>
  )
}



