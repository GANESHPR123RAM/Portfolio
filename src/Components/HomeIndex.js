import React from 'react'
import Homepage from './Homepage'
import Projact from './Projact'
import Carousel from './Carousel'
import Experience from './Experience'
import Certificates from './Certificates'
import Contact from '../Components/Contactus'
import About from './About'
import ZoomText from './Zoom'


function HomeIndex() {
  return (
    <>
      <div className=" overflow-x-hidden">
        <Homepage />
        <ZoomText/>
        <About/>
        <Carousel />
        <Projact />
        <Experience />
        <Certificates />
        <Contact />
      </div>
    </>
  )
}

export default HomeIndex
