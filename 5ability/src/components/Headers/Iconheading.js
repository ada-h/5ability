import React, {Component} from 'react'

class Iconheading extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className ='tc'>
                <h2> {this.props.heading.heading}</h2>
                <p> {this.props.heading.paragraph}</p>
                <i className="fa fa-btn-play">How 5ability works</i>
            </div>
        )
    }
 
}
export default Iconheading