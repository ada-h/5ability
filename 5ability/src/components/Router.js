import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import EachService from './EachService'
import UserPitch from './UserPitch'
import StartSelling from './StartSelling'
import ExplorePro from './ExplorePro'

class Routing extends Component{
    
    render(){
        return(
            <Router>
                <div>
                    <Route exact path= '/' component= {App}/>
                    <Route exact path= '/start_selling' component = {StartSelling}/>
                    <Route exact path = '/categories/:id' component ={EachService}/> 
                    <Route exact path = '/pro/about' component ={ExplorePro}/> 
                    <Route exact path = '/categories/userpitch/:description' component = {UserPitch}/>
                </div>
            </Router>
        )
    }
}

export default Routing