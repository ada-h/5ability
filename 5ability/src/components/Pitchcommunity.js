import React, { Component} from 'react'

class Pitchcommunity extends Component{
 constructor(props){
    super(props)
 }

 render(){
     const {pitch, image, name, starting} = this.props
     console.log(image)
     const BackgroundImage = {
        backgroundImage : `url(${image})`,
        height: 130
     }
     const coverDiv = {
        margin: 20,
     }

     return(
        <div style = {coverDiv} className = 'col-lg-2 col-sm-12 gallerypic'>
            <div style = {BackgroundImage}>
            
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