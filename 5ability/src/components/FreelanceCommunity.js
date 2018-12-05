import React, {Component} from 'react'
import './Css/FreelanceCommunity.css';


class FreelanceCommunity extends Component{
    constructor(){
        super()
        this.state = {
           isShowing: false,
           hover: false,
        }

       
    }
    dimonMouseEnter = ()=> {this.setState({hover: true})}
    undimonMouseLeave = ()=> {this.setState ({hover: false})}


    render(){
        const {image, username, skill} = this.props
        const BackgroundImage = {
            backgroundImage: `url(${image})`,
            height: 300,
            width: 300,
        }
        const Transparency = {
            opacity: 0.5,
            backgroundColor: 'black',
            backgroundImage: `url(${image})`,
            height: 300,
            width: 300,
        }
        let transparent = this.state.hover ? Transparency : BackgroundImage
        return(       
            <div onClick={this.props.onClick} data-target="#sellerModal" data-toggle="modal" 
            className ="grow community" id = "communityPitch" style ={transparent}
            onMouseEnter = {this.dimonMouseEnter} onMouseLeave = {this.undimonMouseLeave}>  
                <h3 className = 'definition'> {skill}</h3>
                <p className = 'username'> {username}</p>
            </div>              

        )
    }
}

export default FreelanceCommunity