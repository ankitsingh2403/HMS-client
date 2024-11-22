import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'

const AboutUs = () => {
  return (
    <div>
      <Hero title={"Learn More About Us | D-care Multispeciality Hospital"} imageUrl={"/about.png"}/>
      <Biography imageUrl={"/whoweare.png"}/>
    </div>
  )
}

export default AboutUs
