import React, {Component} from 'react'
import './Modal.css';


class Modal extends Component{
    constructor(props){
    super(props);
    this.state = {
        isVisible: true
    }
    }
  render(){
      const {closeModalHandler, isVisible, closeModal} = this.props
      const modalStyle = {
          display: isVisible ? 'block' : 'none'
      }
      return(
          <div className="modal-overlay" style={modalStyle}>
            <button onClick={closeModalHandler}>close me</button>
            <div className="modal-bodyr">
             The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannof, but still need the element to resemble a link, use a button and change it with appropriate styles.
            </div>
          </div>
      )
  }
}
export default Modal