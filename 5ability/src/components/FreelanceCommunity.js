import React, {Component} from 'react'
import './Css/FreelanceCommunity.css';


class FreelanceCommunity extends Component{
    constructor(){
        super()
        this.state = {
           isShowing: false,
        }
    }

    render(){
        const {image, username, skill} = this.props
        const BackgroundImage = {
            backgroundImage: `url(${image})`
        }
        return(       
            <div onClick={this.props.onClick} data-target="#myModal" data-toggle="modal" className ="grow community dim" id = "communityPitch" style ={BackgroundImage}>  
                <h3 className = 'definition'> {skill}</h3>
                <p className = 'username'> {username}</p>
            </div>              

        )
    }
}

export default FreelanceCommunity