import React, {Component} from 'react'
import Css from './Css/Howitworks.css'


class Howitworksbanner extends Component {
    constructor(props){
        super(props)
    }


    render(){
        const{image, how, title,className} = this.props
        const BackgroundImage = {
            backgroundImage: `url(${image})`
        }
        return(
            <div className = "col-lg-4">
                 <div className = {className} style = {BackgroundImage}>
                </div>
                <h2> {title} </h2>
                <p> {how} </p>
            </div>
           
        )
    }
}

export default Howitworksbanner 