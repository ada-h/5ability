import React, {Component} from 'react'
import Footer from './FooterComponents/Footer'
import  Secondnavloop from './Loops/Secondnavloop'
import Pitchsidenav from './Pitchsidenav'
import withRouter from 'react-router-dom/withRouter';
import Freelancepitchloop from './Loops/Freelancepitchloop'
import blog from '../data/blog'
import SEO from '../data/seo'

class UserPitch extends Component{
    constructor(props){
        super(props);    
        let categoryId = props.match.params.description;

        let data;
            switch (categoryId) {
                case 1:
                    data = blog;                    
                    break;
                case 2:
                    data =  SEO
                    break;             
            }
        this.data = data;
    }

    render(){
        return(
            <div>
                <Secondnavloop/>
                <Pitchsidenav/>
                <Freelancepitchloop data = {this.data}/>
                <Footer />
            </div>
        )
    }
}

export default withRouter(UserPitch);