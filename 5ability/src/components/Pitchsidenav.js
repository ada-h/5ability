import React, {Component} from 'react'
import location from '../data/location'
import Language from '../data/language'
import Delivery from '../data/delivery'
import Level from '../data/level'

class Pitchsidenav extends Component{
    constructor(){
        super()
        this.state ={
            
        }
    }
  
    render(){
        return(
            <div className = 'col-lg-3'>
                <h5> Refine Results</h5>
                <p> </p>
                <h5> Delivery Time</h5>
                <form>
                    {Delivery.map((delivery, i)=>{
                    return (<option type="radio" key = {i}> {Delivery[i].delivery} </option>)       
                    })      
                    }       
                </form>
                <hr/>
                <form>
                    # <input type="number" className= 'inputsize'/> to 
                    #<input className= 'inputsize' type="number"/> 
                    <input type="button"/>
                    <i className = 'glyphicon glyphicon-menu-right'> </i>
                </form>
                <h5> Online Status</h5>
                <p> </p>
                <h5> Seller Level</h5>
                <form>
                    {Level.map((level, i)=>{
                    return (<option type="checkbox" key = {i}> {Level[i].level} </option>)       
                    })      
                    }             
                </form>
                <h5> Seller Language</h5>
                <form>
                    {Language.map((lang, i)=>{
                    return (<option type="checkbox" key = {i}> {Language[i].language} </option>)       
                    })      
                    }                   
                </form>
                <a href =''> + Show More</a>
                <h5> Seller Location</h5><br/>
                <select name="location">                  
                    {location.map((state, i)=>{
                    return (<option key = {i}> {location[i].location} </option> )       
                    })      
                    }
                </select>
            </div>
        )
    }
}
export default Pitchsidenav;