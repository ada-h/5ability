import React, {Component} from 'react'

class Images extends Component{
    constructor(props){
        super();

    }

    render(){
        const {image,name, profession} = this.props
      
        return (
            <div>
                <img className="img-responsive" src= {image} height= '400px'/> 

            </div>
            
        )
    }
     
}
export default Images 