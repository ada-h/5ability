import React, {Component} from 'react'
import proiconcss from './Css/Proicons.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 

class Proicon extends Component {
    constructor(props){
        super()

    }

    render(){
        const {icon, label, id} =this.props
        const Style = {
            backgroundImage: `url(${icon})`
        }
        return(
            <Link to = {`/pro/categories/${label}/${id}`}>
                <div  className = "col-lg-3 icons">
                    <div style = {Style} className = 'icon-p'> </div>
                    <p className = "prolabel"> {label}</p> 
                </div>
            </Link>
          
            
        )
    }
}

export default Proicon