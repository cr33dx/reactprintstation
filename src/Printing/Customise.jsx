import { Button } from '@mui/material';
import React, { useState } from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import './Printing.css';

export default function Customise(index) {
  const [active, setActive] = useState();
  return (
    <div>
      <div className="customise-content">
        <div style={{ textAlign: 'left' }}>
          <h4>Choose the option given below:</h4>
        </div>
        <CardGroup>
          <Card className="customize-card"
            style={active === index ? { border: '4px solid #95b0f5' } : {}}
            onClick={() => setActive(index)}>
            <Card.Body>
              <Card.Title>Double Side Print</Card.Title>
              <Card.Text>1 Page : 0.75/Page</Card.Text>
              <Card.Text>Total Page : 10</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Total Amount: 200</small>
            </Card.Footer>
          </Card>
          <Card className="customize-card">
            <Card.Body>
              <Card.Title>Single Side Print</Card.Title>
              <Card.Text>1 Page : 0.75/Page</Card.Text>
              <Card.Text>Total Page : 10</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Total Amount: 200</small>
            </Card.Footer>
          </Card>
          <Card className="customize-card">
            <Card.Body>
              <Card.Title>Black and White Print</Card.Title>
              <Card.Text>1 Page : 0.75/Page</Card.Text>
              <Card.Text>Total Page : 10</Card.Text>
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
              <Card.Text>Total Page : 10</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Total Amount: 200</small>
            </Card.Footer>
          </Card>
          <Card className="customize-card">
            <Card.Body>
              <Card.Title>Spiral Bind or Not</Card.Title>
              <Card.Text>1 Page : 0.75/Page</Card.Text>
              <Card.Text>Total Page : 10</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Total Amount: 200</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <div className="button-card">
          <Button color="primary" variant="contained" size="large">Next</Button>
        </div>
      </div>
    </div>
  )
}




// import { Button } from '@mui/material';
// import React from 'react'
// import { Card, CardGroup } from 'react-bootstrap';
// import './Printing.css';
// import CustomiseData from './CustomiseData.js';

// export default function Customise() {
//   return (
//     <div>
//       <div className="customise-content">
//         <div style={{ textAlign: 'left' }}>
//           <h4>Choose the option given below:</h4>
//         </div>
//         <div className="customise-content">
//           {CustomiseData.map((e) => {
//             return (
//               <CardGroup>
//                 <Card className="customize-card">
//                   <Card.Body>
//                     <Card.Title>{e.title}</Card.Title>
//                     <Card.Text>1 Page : {e.perPage}</Card.Text>
//                     <Card.Text>Total Page : {e.totalPage}</Card.Text>
//                   </Card.Body>
//                   <Card.Footer>
//                     <small className="text-muted">Total Amount: {e.amount}</small>
//                   </Card.Footer>
//                 </Card>
//               </CardGroup>
//             );
//           })}
//           <div className="button-card">
//             <Button color="primary" variant="contained" size="large">Next</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

