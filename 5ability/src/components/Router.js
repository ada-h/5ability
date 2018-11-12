import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import EachService from './EachService'

class Routing extends Component{
    
    render(){
        return(
            <Router>
                <div>
                    <Route exact path= '/' component= {App}/>
                    <Route exact path = '/categories/:id' component ={EachService}/> 
                </div>
            </Router>
        )
    }
}

export default Routing