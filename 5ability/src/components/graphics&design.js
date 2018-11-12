import React, {Component} from 'react'

class GraphicsandDesign extends Component{
   
    render(){
        const{description, image} = this.props;
        return( 
            <div className='w-75-ns'>
                <div className= 'dib  pa2 br4 ma2 w-25-ns dim o-50 fr'>
                    <img src = {image} alt = ""/>
                    <div>
                        <p> {description}</p>
                    </div>
                </div>
            </div>      
        )
    }
}
export default GraphicsandDesign
