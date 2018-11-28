import React, { Component} from 'react'

class Pitchcommunity extends Component{
 constructor(props){
    super(props)
 }

 render(){
     const {pitch, image, name, starting} = this.props
     console.log(image)
     const style = {
        backgroundImage : `url(${image})`
     }

     return(
        <div>
            <div style = {style}>
            
            </div>
            <div>
                <p> {name}</p>
                <p> {pitch}</p>
            </div>
            <div> 
                <span className = "glyphicon glyphicon-heart"/>
                STARTING AT {starting}
            </div>
        </div>
     )
 }

}
export default Pitchcommunity