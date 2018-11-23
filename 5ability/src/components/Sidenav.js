import React, {Component} from 'react'

class Sidenav extends Component {
    render(){
        return(         
        <li className=' list'>
            <a href =''  className= "link mid-gray"> {this.props.description}</a>
        </li>      
        )
    }
}

export default Sidenav