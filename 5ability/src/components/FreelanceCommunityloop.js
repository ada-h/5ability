import React, {Component} from 'react'
import  Community from '../data/community'
import Modal from './Modal'
import FreelanceCommunity from './FreelanceCommunity'


class FreelanceCommunityLoop extends Component{
    constructor(){
        super()
        this.state ={
            isVisible: false,
        }
        this.openModalHandler = this.openModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this)        
    }

    openModalHandler = () => {this.setState ({isVisible: true})}
    closeModalHandler = () => {this.setState ({isVisible: false})}

    render(){
        const CommunityLoop = Community.map((communitydata, i) =>{
            return <FreelanceCommunity key={i} image= {Community[i].image} username = {Community[i].username} skill = {Community[i].skill}/>
        })        
    return(
        <div>
            {CommunityLoop}
           // <Modal isVisible={this.state.isVisible} closeModalHandler = {this.closeModalHandler} />
        </div>
    )
    }

}

export default FreelanceCommunityLoop

