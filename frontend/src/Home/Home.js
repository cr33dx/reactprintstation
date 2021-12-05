
import React from 'react'
import FamousWork from './FamousWork';
import TopContent from './TopContent';
import VideoContent from './VideoContent';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <>
      <div className="home-content">
        <div xs={12} >
          <TopContent />
        </div>
      </div><br />
      <div xs={12} className="work-content">
        <FamousWork />
      </div>
      <div xs={12} className="video-content">
        <VideoContent />
      </div>
      <div xs={12} className="footer">
        <Footer />
      </div>

    </>
  )
}
