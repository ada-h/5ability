import React, {Component} from 'react'
import './FreelanceCommunity.css';
import Modal from './Modal'


class FreelanceCommunity extends Component{
    constructor(){
        super()
        this.state = {
           isShowing: false,
        }
            // this.openModalHandler = this.openModalHandler.bind(this);
            // this.closeModalHandler = this.closeModalHandler.bind(this)
    }

    // openModalHandler = () => {this.setState ({isShowing: true})}
    // closeModalHandler = () => {this.setState ({isShowing: false})}

    render(){
        const {image, username, skill} = this.props
        const BackgroundImage = {
            backgroundImage: `url(${image})`
        }
        return(
            <div>
                <div  data-target="#myModal" data-toggle="modal" className ="br1 grow community dim" id = "communityPitch" style ={BackgroundImage}>  
                    <h3 className = 'definition'> {skill}</h3>
                    <p className = 'username'> {username}</p>
                </div>       
                {/* Modal */}               
                  <div className="modal fade" id="myModal" role="dialog">
                  <div className="modal-dialog">    
                    {/* Modal content*/}
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">×</button>
                      </div>
                      <div className="modal-body">
                        <div className ="col-lg-8">
                            <img src = {image} alt = "testimonials"/>
                        </div>
                        <div className ="col-lg-4">
                            <button type = 'button'> Start selling </button>
                        </div>
                      </div>
                    </div>     
                  </div>
                </div> 
            </div>

        )
    }
}

export default FreelanceCommunity