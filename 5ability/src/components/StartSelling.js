import React, {Component} from 'react'
import Footer from './Footer'
import FreelanceCommunityLoop from './FreelanceCommunityloop'
import GetStarted from './GetStarted';
import CommunityHeader from './communityHeader'
import BuyerHeader from './BuyerHeader'
import BuyerLoop from './BuyerLoop'

class StartSelling extends Component{
    render(){
        return(
            <div>
                <CommunityHeader/>
                <div className = 'tc mb2-ns'>
                    <FreelanceCommunityLoop/>
                </div>     
                <BuyerHeader/>   
                <BuyerLoop/>      
                <GetStarted/>
                <Footer/>
            </div>
        )
    }

}
export default StartSelling