import React, {Component} from 'react'

class SellingVid extends Component {
    constructor(){
        super()
    }

    render(){
        const Video = [
            require('./../images/cover_video.mp4')
        ]

        
        return(
            <video width="100%" height="auto" autoplay>
                <source src={Video} type="video/mp4"/>
                Your browser does not support the video tag.   
            </video>
        )
    }
}

export default SellingVid 