import React, {Component} from 'react'
import graphics from '../data/graphics'
import digital from '../data/digital'
import WritingandTranslation from '../data/writingandtranslation'
import Videoanime from '../data/videoandanime'
import MusicandAudio from '../data/musicandaudio'
import ProgrammingandTech from '../data/ProgrammingandTech';
import Business from '../data/business';
import FunandLifestyle from '../data/funandLifestyle';


class Secondnav extends Component {
    constructor(props){
        super(props)
        this.state = {
            onHover: false,
            data: []
        }
    }

    renderList(data){
        let lists = [];
        for(let i in data){
            lists.push(
                <li>{data[i].description}</li>
            );
        }
        return lists;
    }

    render(){
        const {nav,id}= this.props 
        let show = this.state.onHover ? {display: 'block'} : {display: 'none'}
        let subnav = [];
        switch(id){
            case "1": 
            subnav = graphics
            break;
            case '2':
            subnav = digital
            break;
            case '3':
            subnav = WritingandTranslation
            break;
            case '4':
            subnav =  Videoanime 
            break;
            case '5':
            subnav = MusicandAudio
            break;
            case '6':
            subnav = ProgrammingandTech
            break;
            case '7':
            subnav = Business
            break;
            case '8':
            subnav = FunandLifestyle
        }
        
        return(
            <ul className='dropdown menu' onMouseLeave ={() => this.setState({onHover: false})} 
                onMouseEnter = {() => this.setState({onHover: true})}>
                <li> {nav}</li>
                <ul className = 'dropdown-menu onhoverdrop' style={show}>                   
                   <li> {this.renderList(subnav)} </li>                     
                </ul>
            </ul>
        )
    }
}

export default Secondnav