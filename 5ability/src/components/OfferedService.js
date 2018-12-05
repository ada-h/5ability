import React, {Component} from 'react';
import './Css/Marketplace.css';
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
    const show = {display: 'block', borderTop:'1px solid green'}
    const hide = {visibility: 'hidden'}
    const imageStyle = {
        backgroundImage: `url(${image})`,
    };

        return(
            <div className= 'dib pa4 br4 col-sm-6 col-lg-3'
                onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
                <Link to ={`/categories/${id}`} className = 'iconlabel'>
                    <div className = {detail} style={imageStyle}>
                    
                    </div>
                   <div>
                       <h3> {label} </h3> 
                       <p style = {this.state.onhover ? show : hide}>{description}</p>
                   </div>
                </Link>
            </div>
        )

    }
}

export default OfferedService;