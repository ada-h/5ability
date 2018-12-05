import React from 'react'
import Footer from './FooterComponents/Footer'
import  GuidePitchloop from './Loops/GuidePitchloop'
import GuideHeader from './Headers/GuideHeader'
import Guidepage from './Css/Guidepage.css'
import Secondnav from './Loops/Secondnavloop'

const GuidePage = () => {
    return(
        <div>
            <Secondnav/>
            <GuideHeader/>
            <GuidePitchloop/>
            <Footer/>
        </div>
    )
}

export default GuidePage 