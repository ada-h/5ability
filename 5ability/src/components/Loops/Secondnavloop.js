import React, {Component} from 'react'
import headings from '../../data/headings'
import Secondnav from '../Secondnav'

class Secondnavloop extends Component {
    constructor(props){
        super(props)
         
    }
    render(){
        const Navheadings = headings.map((heading, i) =>{
            return <Secondnav key ={i} nav = {headings[i].heading} id = {headings[i].id}/>
        })
        return(
            <div>
                <hr/>
                    {Navheadings}
                <hr/>
            </div>
        )
    }
 
}

export default Secondnavloop