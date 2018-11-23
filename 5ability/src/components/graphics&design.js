import React, {Component} from 'react'
import {BrowserRoute as Route, Router, Link } from 'react-router-dom'

class GraphicsandDesign extends Component{
   
    render(){
        const{description, image} = this.props;
        return( 
            
                <Link to= '/categories/userpitch/:description'>
                    <div className= 'dib br4 dim o-50 pa4'>
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