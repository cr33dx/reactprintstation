import React from 'react'
import { Card } from 'react-bootstrap';
import Image from '../images/lib.jpg';
import './About.css';
import ChooseUs from './ChooseUs';
import OurCompany from './OurCompany';
import FAQ from './FAQ';
import Footer from '../Footer/Footer';

export default function About() {
  return (
    <div>
      <Card className="text-white">
        <Card.Img src={Image} alt="Card image" className="about-bg" />
        <Card.ImgOverlay className="title-content">
          <Card.Title className="about-title">ABOUT US</Card.Title>
        </Card.ImgOverlay>
      </Card>
      <div className="company-content">
        <OurCompany />
      </div>
      <div className="choose-conent">
        <ChooseUs />
      </div>
      <div className="faq-content">
        <FAQ />
      </div>
      <div xs={12} className="footer">
        <Footer />
      </div>

    </div>
  )
}
