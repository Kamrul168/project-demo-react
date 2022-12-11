import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import Work from '../components/work/Work'
import Project from '../components/project/Project'
import Design from '../components/design/Design'
import Clients from '../components/clients/Clients'
import Inquiry  from '../components/inquiry/Inquiry'
import Blog from '../components/blog/Blog'
import Footer from '../components/footer/Footer'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Work/>
    <Project/>
    <Design/>
    <Clients/>
    <Inquiry/>
    <Blog/>
    <Footer/> 
    </>
  )
}

export default Home