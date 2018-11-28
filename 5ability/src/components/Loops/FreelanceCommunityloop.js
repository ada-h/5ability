import React, {Component} from 'react'
import  Community from '../../data/community'
import Modal from '../Modal'
import FreelanceCommunity from '../FreelanceCommunity'


class FreelanceCommunityLoop extends Component{
    constructor(){
        super()
        this.state ={
            currentImage: ''
        }     
    }

    render(){
        const CommunityLoop = Community.map((communitydata, i) =>{
            return(
                <FreelanceCommunity onClick={() => this.setState({currentImage:Community[i].image})} key={i} image= {Community[i].image} username = {Community[i].username} skill = {Community[i].skill}/>
        )})        
    return(
        <div>
            {CommunityLoop}  
            <Modal image={this.state.currentImage}/>           
        </div>
    )
    }

}

export default FreelanceCommunityLoop
