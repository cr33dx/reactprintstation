
import React from 'react'
import Video from "../Video/video.mp4";
import "./Home.css"


export default function VideoContent() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h1 className="header">The Print Station</h1>
          <h4 className="offer">We're Offering Faster Delivery (with 2-3 days)and Normal Delivery(with 3-5 days)</h4>
          <h4 className="print-content">The Print Station app is the smarter way to order your printing in app and
          Our team will carefully package it and get it delivered to your doorsteps. We charge No fees on delivery for the cart value
           greater than Rupees 199 while Pickup from our Outlets can be done by you for FREE at any Cart value.<br />
          Normal Delivery is free of any charges i.e. Free Delivery of Faster Delivery you have to pay some Nominal delivery charges.
           We introduced this charges to make sure the services works around the clock and you receive your deliveries on time.</h4>
        </div>
        <div className="col-md-6">
          <video src={Video} autoPlay="true" width="650" height="450" controls="controls" />
        </div>
      </div>
    </div>
  )
}


