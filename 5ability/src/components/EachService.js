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
import headings from '../data/headings'
import Iconheading from './Headers/Iconheading'
import  Secondnavloop from './Loops/Secondnavloop'

class EachService extends Component {
    constructor(props) {
        super(props);    
        let categoryId = parseInt(props.match.params.id);
        let data;
        let heading;
    
            switch (categoryId) {
                case 1:
                    data = graphics;
                    heading = headings[0];
                    break;
                case 2:
                    data =  Digital
                    heading = headings[1];
                    break;
                case 3:
                    data=  WritingandTranslation
                    heading = headings[2];
                    break;
                case 4:
                    data=  videoandanime
                    heading = headings[3];
                    break;
                case 5:
                    data=  MusicandAudio
                    heading = headings[4];
                    break;
                case 6:
                    data=  ProgrammingandTech
                    heading = headings[5];
                    break;
                case 7:
                    data = Business
                    heading = headings[6];
                case 8:
                    data = FunandLifestyle  
                    heading = headings[7];                 
            }
        this.data = data;
        this.heading = heading;
    }
    render() {
        return (

            <div>
                <Secondnavloop/>
                <Iconheading heading = {this.heading}/>
                <div className="row">
                    <div className="col-md-3">
                        <Sidenavloop data ={this.data}  heading = {this.heading}/>
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