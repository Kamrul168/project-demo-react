import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Featuresbanner from '../components/featuresbanner/Featuresbanner'
import Featurescompanies from '../components/featurescompanies/Featurescompanies'
import Featuresbenifits from '../components/featuresbenifits/Featuresbenifits'
import Featuresgroup from '../components/featuresgroup/Featuresgroup'
import Featuresgroupstudy2 from '../components/featuresgroupstudy2/Featuresgroupstudy2'
import Featuresgroupstudy3 from '../components/featuresgroupstudy3/Featuresgroupstudy3'
import Featuresgroupstudy4 from '../components/featuresgroupstudy4/Featuresgroupstudy4'
import Footer from '../components/footer/Footer'

const Features = () => {
  return (
    <>
    <Navbar/>
    <Featuresbanner/>
    <Featurescompanies/>
    <Featuresbenifits/>
    <Featuresgroup/>
    <Featuresgroupstudy2/>
    <Featuresgroupstudy3/>
    <Featuresgroupstudy4/>
    <Footer/>
    
    </>
  )
}

export default Features