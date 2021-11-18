import React from 'react'
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Image from '../images/printing-man.jpg';
import Customise from './Customise';
import SelectorTools from './SelectorTools';
import Uploader from './Uploader';


export default function Printing() {
  return (
    <div>
      <Card className="text-white">
        <Card.Img src={Image} alt="Card image" className="print-bg" />
        <Card.ImgOverlay className="title-content">
          <Card.Title className="about-title">PRINTING</Card.Title>
        </Card.ImgOverlay>
      </Card>
      {/* <div className="uploader-container">
        <Uploader />
      </div> */}
      <div className="file-selector">
        {/* <SelectorTools /> */}
        <Customise />
      </div>
      <div xs={12} className="footer">
        <Footer />
      </div>
    </div>
  )
}
