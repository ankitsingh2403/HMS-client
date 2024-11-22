import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="about img" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>D-care Hospital Pvt. Ltd. is a leading multispecialty hospital known for its comprehensive healthcare services, with a distinct focus on gynecology. Our expert team of gynecologists is dedicated to women's health, offering specialized care and advanced treatments. Alongside gynecology, we provide a range of medical services, ensuring complete health solutions under one roof.</p>
        <p>D-care Hospital: Specialized in gynecology, delivering exceptional care and compassion.</p>
        <p>D-care Hospital: Committed to compassionate care and excellence.</p>
        <p>At D-care Hospital, we are dedicated to helping patients achieve optimal health through personalized, compassionate care. Our experienced medical team ensures that every patient receives the attention and treatment they deserve for a speedy recovery.</p>
        <p> D-care Hospital offers advanced IVF treatments with cutting-edge technology for successful fertility outcomes.</p>
        <p>Compassionate, Advanced, Reliable.</p>
      </div>
      
    </div>
  )
}

export default Biography
