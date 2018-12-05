import React, {Component} from 'react'
import {Link } from 'react-router-dom'

class GraphicsandDesign extends Component{
   
    render(){
        const{description, image, id} = this.props;
        return( 
                <Link to= {`/categories/${description}`}>
                    <div className= 'dib br4 dim o-50 pa4 col-lg-4'>
                        <img className= 'img-responsive' src = {image} alt = ""/>
                        <div>
                            <p> {description}</p>
                        </div>
                    </div>
                </Link>
                  
        )
    }
}
export default GraphicsandDesign