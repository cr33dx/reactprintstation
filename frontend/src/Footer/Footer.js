import React from 'react'
import './Footer.css';
import logo from '../images/logo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';



export default function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div>
      <div className="footer">
        <div className="row">
          <div className="col-md-4 social-content">
            <div className="brand">
              <img src={logo} alt="logo" width='80px' height="70px" />
              <h2 className="title">THE PRINT STATION</h2>
            </div>
            <div className="community">
              <h4 className="text">Join Our Social Community</h4>
              <div className="icon-content">
                <LinkedInIcon size="2x" onClick={() => openInNewTab('https://www.linkedin.com/in/aman-chauhan-865233207')} />
                <InstagramIcon onClick={() => openInNewTab('https://instagram.com/itschauhan_aman')} />
                <TwitterIcon onClick={() => openInNewTab('https://twitter.com/its_chauhanAMAN?s=09')} />
                <EmailIcon onClick={() => openInNewTab('mailto:info.theprintstation@gmail.com')} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="middle-content">
              <h4 className="text">OUR SERVICES</h4>
              <div className="service-content">
                <h5>SHOPPING</h5>
                <h5>PRINTING</h5>
                <h5>PDF CONVERTER</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="middle-content">
              <h4 className="text">OUR CONTACT</h4><br />
              <div className="service-content">
                <h5 className="contact">+ 91 876543214</h5>
                <h5 onClick={() => openInNewTab('mailto:info.theprintstation@gmail.com')} className="contact">info.theprinstation@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
