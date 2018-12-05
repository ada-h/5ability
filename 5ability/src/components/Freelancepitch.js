import React, {Component} from 'react'

class FreelancePitch extends Component {
    render(){
        const{pitch}= this.props
        return(
            <div className = 'col-lg-2'> 
               <h1> {pitch} </h1> 
            </div>
        )
    }
}
export default FreelancePitch