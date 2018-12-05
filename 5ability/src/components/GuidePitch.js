import React, {Component} from 'react'

class GuidePitch extends Component{
    constructor(){
        super()
    }
    render(){
        const {image , title , id} = this.props
        return(
            <div className = "gallerypic col-lg-3">
                <img src={image} className ="img-thumbnail img-responsive" alt={title} />
                <div className ="description">
                    {title}
                </div>
            </div>
        )
    }
 
}
export default GuidePitch