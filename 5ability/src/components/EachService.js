import React, {Component} from 'react'
import Banner from './Banner'
import Footer from './Footer'
import GandDtree from './ganddtree';
import Sidenavloop from './Sidenavloop'
import withRouter from 'react-router-dom/withRouter';
import switch from 'react-router-dom/switch';

class EachService extends Component{
    constructor(props){
        super(props);
        let categoryId = props.match.params.id;
        switch(categoryId){
            case 1: let data = graphics
            break;
            case 2: id = 2
            break;
        }


        alert(categoryId);
    }
    render(){
        return(
            <div>
              
                <Sidenavloop/>
                <GandDtree/>                
                <Banner/>
                <Footer/>
                
            </div>
        )
    }
      
}
export default withRouter( EachService);