import React from 'react'
import { Carousel } from 'react-bootstrap';
import Image2 from '../images/brown.jpg';
import Image3 from '../images/pink.jpg';
import logo from '../images/logo.png';
import './Home.css';

function TopContent() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image3}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-6">
          <div className="Top-content">
            <img src={logo} alt="logo" width='300px' height="300px" /><br /><br />
            <h1 className="header"><strong className="brand-name">The Print Station</strong></h1>
            <h4 className="offer">Make Students Life Easy</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopContent
