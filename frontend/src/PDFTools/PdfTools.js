import React from 'react'
import Image from '../images/pdfbg.jpg';
import { Card } from 'react-bootstrap';
import './PdfTools.css';
import { Typography } from '@mui/material';
import PdfUploader from './PdfUploader';

export default function PdfTools() {
  return (
    <div>
      <Card className="text-white">
        <Card.Img src={Image} alt="Card image" className="pdf-bg" />
        <Card.ImgOverlay className="title-content">
          <Card.Title className="pdf-title">PDF Tools</Card.Title>
        </Card.ImgOverlay>
      </Card>
      <div className="second-content">
        <PdfUploader />
      </div>
    </div>
  )
}
