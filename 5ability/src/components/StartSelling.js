import React, {Component} from 'react'
import Footer from './FooterComponents/Footer'
import FreelanceCommunityLoop from './Loops/FreelanceCommunityloop'
import GetStarted from './GetStarted';
import CommunityHeader from './Headers/communityHeader'
import BuyerHeader from './Headers/BuyerHeader'
import BuyerLoop from './Loops/BuyerLoop'
import QandA from './QandA'
import QandAHeader from './Headers/QandA'
import Mainnav from './Mainnav'
import SellingVid from './sellingvid'

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