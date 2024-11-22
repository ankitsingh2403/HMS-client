import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1>{title}</h1>
        <p>
        Welcome to  D-care Multispeciality Hospital, a premier healthcare facility dedicated to providing top-notch medical services. With state-of-the-art infrastructure, experienced professionals, and patient-centric care, we strive to ensure the well-being of our community. At D-care Hospital, your health is our priority.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className='animated-image' />
        <span>
          <img src="/Vector.png" alt="/vector" />
        </span>
      </div>
      
    </div>
  )
}

export default Hero
