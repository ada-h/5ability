import React, { Component } from 'react'
import Banner from './Banner'
import Footer from './FooterComponents/Footer'
import GandDtree from './Loops/ganddtree';
import Sidenavloop from './Loops/Sidenavloop'
import withRouter from 'react-router-dom/withRouter';
import graphics from '../data/graphics'
import videoandanime from '../data/videoandanime'
import Digital from '../data/digital'
import  WritingandTranslation from '../data/writingandtranslation'
import MusicandAudio from '../data/musicandaudio'
import ProgrammingandTech from '../data/ProgrammingandTech'
import Business from '../data/business'
import FunandLifestyle from '../data/funandLifestyle'

class EachService extends Component {
    constructor(props) {
        super(props);
        
        let categoryId = parseInt(props.match.params.id);
        let data;
    
            switch (categoryId) {
                case 1:
                    data = graphics;
                    break;
                case 2:
                    data =  Digital
                    break;
                case 3:
                    data=  WritingandTranslation
                    break;
                case 4:
                    data=  videoandanime
                    break;
                case 5:
                    data=  MusicandAudio
                    break;
                case 6:
                    data=  ProgrammingandTech
                    break;
                case 7:
                    data = Business
                case 8:
                    data = FunandLifestyle                   
            }
        this.data = data;
    }
    render() {
        return (

            <div>
                <div className="row">
                    <div className="col-md-3">
                        <Sidenavloop data ={this.data}/>
                    </div>
                    <div className="col-md-9">
                        <GandDtree data = {this.data}/>   
                    </div>
                </div>                     
                <Banner />
                <Footer />

            </div>
        )
    }

}
export default withRouter(EachService);