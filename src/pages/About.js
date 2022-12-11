import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Aboutgroup from '../components/aboutgroup/Aboutgroup'
import Aboutgoal from '../components/aboutgoal/Aboutgoal'
import Aboutprocess from '../components/aboutprocess/Aboutprocess'
import Aboutinspire from '../components/aboutinspire/Aboutinspire'
import Aboutbenefits from '../components/aboutbenifits/Aboutbenifits'
import Aboutmeet from '../components/aboutmeet/Aboutmeet'
import Footer from '../components/footer/Footer'



const About = () => {
  return (
    <>
        <Navbar/>
        <Aboutgroup/>
        <Aboutgoal/>
        <Aboutprocess/>
        <Aboutinspire/>
        <Aboutbenefits/>
        <Aboutmeet/>
        <Footer/>
        
    
    </>
  )
}

export default About