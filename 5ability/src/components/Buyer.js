import React, {Component} from 'react'

class Buyer extends Component{
    constructor(){
        super()
        this.state ={
            style : ''
        }
    }
     
    render(){
        const BackgroundImage = {
            backgroundImage: `url(${image})`
        }

        const {image, testimony, abbr} = this.props
        return(
            <div style = {BackgroundImage} className = 'dib  pa2 br4 col-lg-3 ma2'>
                <h4> '{testimony}'</h4>
                <pre> {abbr}</pre> 
            </div>
        )
    }
   
}
export default Buyer