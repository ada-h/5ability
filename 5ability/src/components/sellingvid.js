import React, {Component} from 'react'
import Workyourway from './Workyourway'
import Gigsworth from './Gigsworth'

class SellingVid extends Component {
    constructor(){
        super()
    }

    render(){
        const Video = [
            require('./../images/cover_video.mp4')
        ]

        
        return(
            <div>
                <video width="100%" height="auto" autoPlay>
                    <source src={Video} type="video/mp4"/>
                    Your browser does not support the video tag.   
                </video>
                <Workyourway/>
                <Gigsworth/>
            </div>
          
        )
    }
}

export default SellingVid 