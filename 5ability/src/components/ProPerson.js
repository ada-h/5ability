import React, {Component} from 'react'
class ProPerson extends Component{

    render(){
        const {image, description, name, contact} = this.props
        return (
            <div className = "col-lg-2 dib mb3-ns pa2 br4 ma4">
                <div>
                    <img src = {image} alt = {name} />
                </div>
                <div>
                    <p> {description}</p>
                </div>
                <div>
                    <a href ={contact}/>
                </div>
            </div>
        )
    }
   
}

export default ProPerson