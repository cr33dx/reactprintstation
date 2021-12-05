import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import PdfTools from '../PDFTools/PdfTools';
import Printing from '../Printing/Printing';
import Shopping from '../Shopping/Shopping';
import Image1 from '../images/Printing2.jpg';
import Image2 from '../images/booklet.jpg';
import Image3 from '../images/pdf2.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function FamousWork() {
  return (
    <Router>
      <div>
        <div className="work-content">
          <div>
            <h1 className="famous-title">FAMOUS WORK</h1>
          </div>
          <CardGroup>
            <Card className="famous-card">
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title className="work-title">
                  <a href="/shopping" class="home-link">SHOPPING</a>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="famous-card">
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title className="work-title">
                  <a href="/printing" class="home-link">PRINTING</a>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="famous-card">
              <Card.Img variant="top" src={Image3} />
              <Card.Body>
                <Card.Title className="work-title">
                  <a href="/pdftool" class="home-link">PDF CONVERTER</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </Router>
  )
}
