import React, {Component} from 'react'
import Footer from './FooterComponents/Footer'
import blog from '../data/blog'
import SEO from '../data/seo'
import Pitchlanding from './Pitchlanding'
import Pitchcommunityloop from './Loops/Pitchcommunityloop'

class ProPitch extends Component{
    constructor(props){
        super(props)

        let categoryId = parseInt(props.match.params.id);
        let data

        switch (categoryId){
            case 1: data = blog;
            break 
            case 2: data = SEO;
            break 
        }
        this.data = data
    }
    render(){
        return(
            <div>
                <Pitchlanding/>
                <Pitchcommunityloop data = {this.data}/>
                <Footer/>
            </div>
        )
    }
 
}
export default ProPitch