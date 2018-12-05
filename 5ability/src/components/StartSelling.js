import React, {Component} from 'react'
import Footer from './FooterComponents/Footer'
import FreelanceCommunityLoop from './Loops/FreelanceCommunityloop'
import GetStarted from './GetStartedbutton';
import CommunityHeader from './Headers/communityHeader'
import BuyerHeader from './Headers/BuyerHeader'
import BuyerLoop from './Loops/BuyerLoop'
import QandA from './QandA'
import QandAHeader from './Headers/QandA'
import Mainnav from './Mainnav'
import SellingVid from './sellingvid'
import Howitworks from './Headers/Howitworks'
import Howitworksloop from './Loops/Howitworksloop'


class StartSelling extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className= 'App'>
                <Mainnav/>
                <SellingVid/>
                <CommunityHeader/>
                <div className = 'tc mb2-ns'>
                    <FreelanceCommunityLoop/>
                </div>   
                <Howitworks/>
                <Howitworksloop/>  
                <BuyerHeader/> 
                <BuyerLoop/>   
                <QandAHeader/>
                <QandA/>                                      
                <GetStarted/>
                <Footer/>
            </div>
        )
    }

}
export default StartSelling