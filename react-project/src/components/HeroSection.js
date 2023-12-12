import React from 'react'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="../puplic/videos/video-2.mp4" autoPlay loop muted/>
      <h1>Adventure awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-bths">
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='ntn--large'>
            GET STARTED
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
