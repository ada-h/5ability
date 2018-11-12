import React, {Component} from 'react';
import '../components/Marketplace.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class OfferedService extends Component{
    constructor(props){
        super(props);
        this.state = {
            onhover: false
        }
    }
    onMouseLeave= () => this.setState({onhover: false})
    onMouseEnter=() => this.setState({onhover: true})

    render() {
            
    const {label, detail, image, description,id} = this.props;
    const imageStyle = {
        backgroundImage: `url(${image})`
    };
        return(
            <div className= 'dib mb3-ns pa2 br4 ma2 grow shadow-2 w-25-ns' onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
                <Link to ={`/categories/${id}`}>
                    <div className = {detail} style={imageStyle}>
                    
                    </div>
                   <div>
                       <h3> {label} </h3> 
                       <p>{this.state.onhover ? description : ''}</p>
                   </div>
                </Link>
            </div>
        )

    }
}

export default OfferedService;