import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import Hero from '../components/Hero'
AppointmentForm

const Appointment = () => {
  return (
    <>
      <Hero title={"Schedule your Appointment | D-care Multispeciality Hospital"} imageUrl={"/signin.png"}/>
      <AppointmentForm/>
    </>
  )
}

export default Appointment
