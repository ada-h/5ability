import React, {Component} from 'react'

class Buyer extends Component{
    constructor(){
        super()
        this.state ={
            style : ''
        }
    }
     
    render(){
        const {image, testimony, abbr} = this.props
        const BackgroundImage = {
            backgroundImage: `url(${image})`,
            height: '250px',
            width: '100%',
        }
        return(
            <div style = {BackgroundImage} className = 'dib br4 col-lg-3'>
                <h4> '{testimony}'</h4>
                <pre> {abbr}</pre> 
            </div>
        )
    }
   
}
export default Buyer