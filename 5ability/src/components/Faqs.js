import React,{Component} from 'react'
import Articledetail from '.././data/articledetail'

class Faqs extends Component {
    render(){
       
        return(
            <div className = 'row'>
                <div className = 'col-lg-6'>
                    <h5> What's the difference between a blog post & an article? </h5>
                    <p> {Articledetail[0].difference}</p>
                </div>
                <div className = 'col-lg-6'>
                    <h5> How long should a blog post be for SEO? </h5>
                    <p>{Articledetail[0].duration}</p>
                </div>
                <div className = 'col-lg-6'>
                    <h5> What is the proper format for article writing? </h5>
                    <p>{Articledetail[0].format} </p>
                </div>
                <div className = 'col-lg-6'>
                    <h5> What kind of articles are most common? </h5>
                    <p>{Articledetail[0].common} </p>
                </div>
                <div className = 'col-lg-6'>
                    <h5> What are the benefits of blogging for businesses? </h5>
                    <p> {Articledetail[0].benefits}</p>
                </div>
                <div className = 'col-lg-6'>
                    <h5> SEO blog, SEO copywriting, SEO articles. What's the difference? </h5>
                    <p> {Articledetail[0].copyright}</p>
                </div>
            </div>
        )
    }
}

export default Faqs