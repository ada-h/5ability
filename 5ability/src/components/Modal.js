import React, {Component} from 'react'

class Modal extends Component{
    constructor(props){
        super()
    }
    
    render(){
        return(
            <div>
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
                            <img src = {this.props.image} alt = "testimonials"/>
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
export default Modal