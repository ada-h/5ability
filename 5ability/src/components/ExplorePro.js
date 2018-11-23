import React,{Component} from 'react'
import LandingImage from './LandingImage'
import Proheader from './Proheader'
import Prothat from './Prothat'
import ProPeople from './proPeople'
import Talent from './Talent'
import Hire from './Hire'
import ProSeller from './ProSeller'
import Footer from './Footer'

class Explore extends Component{
    render(){
        return(
            <div>
                <LandingImage/>
                <Proheader/>
                <ProPeople/>
                <Prothat/>
                <Talent/>   
                <Hire/>
                <ProSeller/>
                <Footer/>
            </div>
        )
    }
} 

export default Explore