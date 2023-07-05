import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Home from './Home'
import Partners from './Partners'
import Services from './Services'
import Number from './Number'
import Solution from './Solution'
import Video from './Video'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Barner from './Barner'

const LandingPage = () => {
  return (
      <div>
          <Hero />
          <Home />
          <Barner />
          <Partners />
          <Services />
          <Number />
          <Solution />
          <Video />
          <Testimonial />
    </div>
  )
}

export default LandingPage